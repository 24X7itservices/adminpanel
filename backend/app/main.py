import sentry_sdk
import os
import sys
from fastapi import FastAPI, HTTPException, Depends
from fastapi.routing import APIRoute
from starlette.middleware.cors import CORSMiddleware
from app.api.deps import SessionDep
from app.core.config import settings
from sqlalchemy.orm import Session
from pydantic import BaseModel
from app import crud
from fastapi import FastAPI
from app.api.main import api_router
from app.core.security import SecurityService
from fastapi import FastAPI, Request
from fastapi.responses import PlainTextResponse

import traceback




def custom_generate_unique_id(route: APIRoute) -> str:
    return f"{route.tags[0]}-{route.name}"


if settings.SENTRY_DSN and settings.ENVIRONMENT != "local":
    sentry_sdk.init(dsn=str(settings.SENTRY_DSN), enable_tracing=True)



# Initialize FastAPI first
app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    root_path="/api/admin",
)

# Exception handler after app is created
@app.exception_handler(Exception)
async def debug_exception_handler(request: Request, exc: Exception):
    error_trace = traceback.format_exc()
    return PlainTextResponse(
        status_code=500,
        content=f"FASTAPI INNER ERROR TRACE:\n\n{error_trace}"
    )

app.include_router(api_router, prefix=settings.API_V1_STR)



# app = FastAPI(
#     title=settings.PROJECT_NAME,
#     openapi_url=f"{settings.API_V1_STR}/openapi.json",
#     generate_unique_id_function=custom_generate_unique_id,
# )

# # Set all CORS enabled origins
# if settings.all_cors_origins:
#     app.add_middleware(
#         CORSMiddleware,
#         allow_origins=settings.all_cors_origins,
#         allow_credentials=True,
#         allow_methods=["*"],
#         allow_headers=["*"],
#     )

# app.include_router(api_router, prefix=settings.API_V1_STR)

# Configuration (In production, load these from environment variables!)
AES_KEY_HEX = "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"
JWT_SECRET = "JHNpM79iZGTFjX44PurXSD2DIlP2A6y5GuHifd5RcUy"

# Instantiate the service
security = SecurityService(aes_key_hex=AES_KEY_HEX, jwt_secret=JWT_SECRET)

# Strict schema definition matching your frontend request body payload
class LoginPayload(BaseModel):
    formData: dict

@app.post("/login", tags=["login"])
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
        
    # 3. Generate a clean JWT token on authentication success
    token = security.generate_token(user_id=user.id, email=user.email)

    raw_user_data = {
                "id": user.id,
                "email": user.email,
                "name": getattr(user, "name", None),
                "role": getattr(user, "role", "user")
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