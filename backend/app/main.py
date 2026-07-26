from typing import Optional

from fastapi.encoders import jsonable_encoder
import sentry_sdk
import os
import sys
from fastapi import FastAPI, HTTPException, Depends, Query, status
from fastapi.routing import APIRoute
from starlette.middleware.cors import CORSMiddleware
from app.api.deps import CurrentUser, SessionDep
from app.core.config import settings
from sqlalchemy.orm import Session
from pydantic import BaseModel
from app import crud
from fastapi import FastAPI
from app.api.main import api_router
from app.core.security import SecurityService
from app.models import UserCreate
from app.models import Quotation, QuotationProduct, QuotationCreateRequest,QuotationReadWithProducts




def custom_generate_unique_id(route: APIRoute) -> str:
    return f"{route.tags[0]}-{route.name}"


if settings.SENTRY_DSN and settings.ENVIRONMENT != "local":
    sentry_sdk.init(dsn=str(settings.SENTRY_DSN), enable_tracing=True)

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    generate_unique_id_function=custom_generate_unique_id,
)

# Set all CORS enabled origins
if settings.all_cors_origins:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.all_cors_origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

app.include_router(api_router, prefix=settings.API_V1_STR)

# Configuration (In production, load these from environment variables!)
AES_KEY_HEX = "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"
JWT_SECRET = "JHNpM79iZGTFjX44PurXSD2DIlP2A6y5GuHifd5RcUy"

# Instantiate the service
security = SecurityService(aes_key_hex=AES_KEY_HEX, jwt_secret=JWT_SECRET)

# Strict schema definition matching your frontend request body payload
class LoginPayload(BaseModel):
    formData: dict

@app.post("/api/admin/login", tags=["login"])
async def login_route(payload: dict, db: SessionDep):
    """
    API Router: Intercepts network payload, decrypts it, and calls CRUD authentication.
    """
    # 1. Decrypt incoming data package bundle from Angular
    decrypted_data = security.decrypt_form_data(payload)
    if not decrypted_data:
        raise HTTPException(
            status_code=400, 
            detail="Security verification failed. Invalid encryption envelope."
        )
        
    email = decrypted_data.get("email")
    password = decrypted_data.get("password")

    # 2. Pass clean parameters directly to your keyword-enforced CRUD function
    user = crud.authenticate(session=db, email=email, password=password)
    
    if not user:
        raise HTTPException(
            status_code=401, 
            detail="Invalid email or password"
        )

    if user.role != "admin" and user.role != "superadmin":
        raise HTTPException(
            status_code=401, 
            detail="Login allowed for admin users only."
        )
        
    # 3. Generate a clean JWT token on authentication success
    token = security.generate_token(user_id=str(user.id), email=user.email)

    raw_user_data = {
                "id": user.id,
                "email": user.email,
                "name": getattr(user, "name", None),
                "role": user.role
            }
    encrypted_user_data = security.encrypt_form_data(raw_user_data)
    if not encrypted_user_data:
        raise HTTPException(status_code=500, detail="Outbound encryption failed")
    
    # 4. Return standard authentication keys back to Angular
    return {
        "status": 200,
        "message": "Login successful",
        "token": token,
        "data": encrypted_user_data
    }



@app.post("/api/admin/create_user", tags=["create-user"])
async def create_user_route(payload: dict, db: SessionDep, current_user: CurrentUser):
    """
    API Router: Intercepts network payload, decrypts it, and calls CRUD authentication.
    """
    # 1. Decrypt incoming data package bundle from Angular
    decrypted_data = security.decrypt_form_data(payload)
    if not decrypted_data:
        raise HTTPException(
            status_code=400, 
            detail="Security verification failed. Invalid encryption envelope."
        )
        
    email = decrypted_data.get("email")

    # 2. Pass clean parameters directly to your keyword-enforced CRUD function
    user = crud.get_user_by_email(session=db, email=email)
    
    if user and user.role == "client":
        raise HTTPException(
            status_code=400, 
            detail="User with this email already exists in the system."
        )

    client_name = decrypted_data.get("client_name")
    contactNumber = decrypted_data.get("contactNumber")
    district = decrypted_data.get("district")
    state = decrypted_data.get("state")
    pincode = decrypted_data.get("pincode")
    address = decrypted_data.get("address")
    password = decrypted_data.get("password")
    role = decrypted_data.get("role")

    if role == "client":
        next_emp_id = crud.generate_next_employee_id(session=db, prefix="CLI", padding=4)

    if role == "employee":
        next_emp_id = crud.generate_next_employee_id(session=db, prefix="EMP", padding=4)

    if role == "admin" and role == "superadmin":
        next_emp_id = None
        
    user_in = UserCreate(
        name=client_name,
        email=email,
        phone=contactNumber,
        role=role,
        address=address,
        referral_code=None,
        terms_and_condition=False,
        is_active=True,
        profile_avatar=None,
        client_employee_id=next_emp_id,
        pincode=pincode,
        district=district,
        state=state,
        password=password
        )
    
    new_user = crud.create_user(session=db, user_create=user_in)

    if not new_user:
        raise HTTPException(
            status_code=500,
            detail="Failed to create user record in the database."
        )

    
    # 4. Return standard authentication keys back to Angular
    return {
        "status": 200,
        "message": "User created successfully"
    }



@app.get("/api/admin/getUsers", tags=["users"])
async def get_users_route(
    db: SessionDep,
    # current_user: CurrentUser,
    user_type: Optional[str] = Query(default=None, description="Filter users by type/role"),  # <-- NEW PARAMETER
    skip: int = Query(default=0, ge=0),
    limit: int = Query(default=100, ge=1, le=500)
):
    # 1. Role verification (Admins/Superadmins only)
    # if current_user.role not in ("admin", "superadmin"):
    #     raise HTTPException(
    #         status_code=status.HTTP_403_FORBIDDEN,
    #         detail="Not enough permissions to access user records."+current_user.role
    #     )

    # 2. Query users from DB
    users = crud.get_users(session=db, user_type=user_type, skip=skip, limit=limit)

    # 3. Serialize user objects into dictionaries (excluding sensitive fields)
    raw_users_list = []
    for user in users:
        raw_users_list.append({
            "id": str(user.id),
            "client_employee_id": getattr(user, "client_employee_id", None),
            "name": getattr(user, "name", None),
            "email": user.email,
            "phone": getattr(user, "phone", None),
            "role": user.role,
            "is_active": getattr(user, "is_active", True),
            "district": getattr(user, "district", None),
            "state": getattr(user, "state", None),
            "address": getattr(user, "address", None),
            "pincode": getattr(user, "pincode", None),
            "created_at": str(getattr(user, "created_at", ""))
        })

    # 4. Encrypt outbound list for Angular
    encrypted_data = security.encrypt_form_data({"users": raw_users_list})
    if not encrypted_data:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Outbound encryption failed."
        )

    # 5. Return response envelope
    return {
        "status": 200,
        "message": "Users retrieved successfully",
        "count": len(raw_users_list),
        "data": encrypted_data
    }


class EncryptedFormEnvelope(BaseModel):
    formData: dict
@app.post("/api/admin/quotations", tags=["quotations"], status_code=status.HTTP_201_CREATED)
def create_quotation_route(
    payload: EncryptedFormEnvelope, 
    db: SessionDep  # or session: Session = Depends(get_session)
):
    try:
        decrypted_data = security.decrypt_form_data(payload.model_dump())
        if not decrypted_data:
            raise HTTPException(
                status_code=400, 
                detail="Security verification failed. Invalid encryption envelope."
            )
        quotation_in = QuotationCreateRequest(**decrypted_data)
        quotation = crud.create_quotation(session=db, quotation_in=quotation_in)
        return {
            "success": 200,
            "message": "Quotation created successfully"
        }
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Failed to create quotation: {str(e)}"
        )


@app.get("/api/admin/quotations",tags=["quotations"])
def get_all_quotations_route(
    db: SessionDep,
    skip: int = Query(default=0, ge=0),
    limit: int = Query(default=100, ge=1, le=500)
):
    quotations = crud.get_all_quotations(session=db, skip=skip, limit=limit)
    quotations_dict = jsonable_encoder(quotations)
    # 4. Encrypt outbound list for Angular
    encrypted_data = security.encrypt_form_data( quotations_dict)
    if not encrypted_data:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Outbound encryption failed."
        )

    # 5. Return response envelope
    return {
        "status": 200,
        "message": "Users retrieved successfully",
        "count": len(quotations),
        "data": encrypted_data
    }
    return quotations


@app.post("/api/admin/quotations/{ref_no:path}",tags=["quotations"])
def get_quotation_by_ref_route(
    ref_no: str, 
    db: SessionDep
):
    # Unpack both quotation and explicitly loaded products list
    quotation, db_products = crud.get_quotation_by_ref_number(session=db, ref_no=ref_no)
    
    if not quotation:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Quotation with url_call '{ref_no}' was not found."
        )
    
    # 1. Map products safely into clean dictionaries
    products_list = []
    for p in db_products:
        products_list.append({
            "id": getattr(p, "id", None),
            "quotation_reference_number": getattr(p, "quotation_reference_number", ""),
            "product_name": getattr(p, "product_name", ""),
            "quantity": getattr(p, "quantity", 0),
            "price": float(getattr(p, "price", 0.0) or 0.0),
            "gst": float(getattr(p, "gst", 0.0) or 0.0),
            "total": float(getattr(p, "total", 0.0) or 0.0)
        })

    # 2. Date formatting helper
    def format_date(val):
        if not val:
            return ""
        if hasattr(val, "isoformat"):
            return val.isoformat()
        return str(val)

    # 3. Construct response dictionary
    raw_payload = {
        "id": getattr(quotation, "id", None),
        "quotation_reference_number": getattr(quotation, "quotation_reference_number", ""),
        "client_employee_id": getattr(quotation, "client_employee_id", None),
        "additional_offer": getattr(quotation, "additional_offer", None),
        "created_at": format_date(getattr(quotation, "created_at", None)),
        "total_amount": float(getattr(quotation, "total_amount", 0.0) or 0.0),
        "quotation_date": format_date(getattr(quotation, "quotation_date", None)),
        "url_call": getattr(quotation, "url_call", ref_no),
        "products": products_list  # 👈 All 5 products passed cleanly here
    }

    encrypted_data = security.encrypt_form_data(raw_payload)
    if not encrypted_data:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Outbound encryption failed."
        )
    
    return {
        "status": 200,
        "message": "Quotation retrieved successfully",
        "data": encrypted_data
    }


@app.put("/api/admin/quotations_update/{ref_no:path}",tags=["quotations"], status_code=status.HTTP_201_CREATED)
def update_quotation_route(
    ref_no: str,
    db: SessionDep,
    payload: EncryptedFormEnvelope,
):

    try:
        decrypted_data = security.decrypt_form_data(payload.model_dump())
        if not decrypted_data:
            raise HTTPException(
                status_code=400, 
                detail="Security verification failed. Invalid encryption envelope."
            )
        payload = QuotationCreateRequest.model_validate(decrypted_data)
        update_quotation = crud.update_quotation_by_ref_number(
                session=db, 
                ref_no=ref_no, 
                payload=payload
            )
        if not update_quotation:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Quotation with reference number '{ref_no}' was not found."
            )
        return {
            "success": 200,
            "message": "Quotation updated successfully"
        }
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Failed to create quotation: {str(e)}"
        )
