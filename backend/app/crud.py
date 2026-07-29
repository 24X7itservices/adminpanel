import re
from typing import Any, Optional, Tuple, List

from sqlmodel import Session, func, select
from sqlalchemy.orm import selectinload
from app.core.security import SecurityService
from app.models import User, UserCreate, UserUpdate
from app.models import Quotation, QuotationProduct, QuotationCreateRequest
from app.models import ContactForm, QuotationRequest,QuotationRequestPublic


def create_user(*, session: Session, user_create: UserCreate) -> User:
    db_obj = User.model_validate(
        user_create, update={"password": SecurityService.get_password_hash(user_create.password)}
    )
    session.add(db_obj)
    session.commit()
    session.refresh(db_obj)
    return db_obj


def update_user(*, session: Session, db_user: User, user_in: UserUpdate) -> Any:
    user_data = user_in.model_dump(exclude_unset=True)
    extra_data = {}
    if "password" in user_data:
        password = user_data["password"]
        password = SecurityService.get_password_hash(password)
        extra_data["password"] = password
    db_user.sqlmodel_update(user_data, update=extra_data)
    session.add(db_user)
    session.commit()
    session.refresh(db_user)
    return db_user


def get_user_by_email(*, session: Session, email: str) -> User | None:
    statement = select(User).where(User.email == email)
    session_user = session.exec(statement).first()
    return session_user


# Dummy hash to use for timing attack prevention when user is not found
# This is an Argon2 hash of a random password, used to ensure constant-time comparison
DUMMY_HASH = "$argon2id$v=19$m=65536,t=3,p=4$MjQyZWE1MzBjYjJlZTI0Yw$YTU4NGM5ZTZmYjE2NzZlZjY0ZWY3ZGRkY2U2OWFjNjk"


def authenticate(*, session: Session, email: str, password: str) -> User | None:
    
    db_user = session.query(User).filter(User.email == email).first()
    
    if not db_user:
        SecurityService.verify_password(password, DUMMY_HASH)
        return None
        
    verified, updated_password_hash = SecurityService.verify_password(password, db_user.password)
    
    if not verified:
        return None
        
    if updated_password_hash:
        db_user.password = updated_password_hash
        session.add(db_user)
        session.commit()
        session.refresh(db_user)
        
    return db_user



def generate_next_employee_id(session: Session, prefix: str = "EMP", padding: int = 4) -> str:
   
    # Get all non-null employee IDs
    statement = select(User.client_employee_id).where(User.client_employee_id.is_not(None))
    existing_ids = session.exec(statement).all()

    max_num = 0
    # Find the highest number among existing EMP IDs
    for emp_id in existing_ids:
        if emp_id and emp_id.startswith(prefix):
            # Extract digits from 'EMP0005' -> '0005' -> 5
            digits = re.sub(r"\D", "", emp_id)
            if digits.isdigit():
                max_num = max(max_num, int(digits))

    next_num = max_num + 1
    # Format with leading zeros: EMP + 0001
    return f"{prefix}{next_num:0{padding}d}"


def get_users(
    session: Session, 
    user_type: Optional[str] = None, 
    skip: int = 0, 
    limit: int = 100
) -> list[User]:
    """Fetches a list of users with optional filtering by type/role."""
    statement = select(User)
    
    if user_type is not None:
        # Match 'role' or 'type' depending on your model property name
        statement = statement.where(User.role == user_type)
        
    statement = statement.offset(skip).limit(limit)
    return session.exec(statement).all()


def create_quotation(*, session: Session, quotation_in: QuotationCreateRequest) -> Quotation:
    # 1. Parent quotation
    db_quotation = Quotation(
        quotation_reference_number=quotation_in.refNo,
        client_employee_id=quotation_in.clientName,
        additional_offer=quotation_in.additional_emi_option or None,
        total_amount=quotation_in.grandTotal or None,
        quotation_date=quotation_in.date,
        url_call = quotation_in.url_call,
        quotation_for = quotation_in.quotation_for
    )
    session.add(db_quotation)
    session.flush()

    # 2. Child product records
    for item in quotation_in.items:
        db_product = QuotationProduct(
            quotation_reference_number=quotation_in.refNo,
            product_name=item.itemDescription,
            quantity=item.qty,
            unit=item.unit,
            price=item.rate,
            gst=item.gst,
            total=item.total,
        )
        session.add(db_product)

    session.commit()
    session.refresh(db_quotation)
    return db_quotation



def get_all_quotations(*, session: Session, skip: int = 0, limit: int = 100) -> List[Quotation]:
    """Retrieve all quotations with their associated products."""
    statement = (
        select(Quotation)
        .options(selectinload(Quotation.products))  # Eagerly load nested products
        .offset(skip)
        .limit(limit)
    )
    return session.exec(statement).all()


def get_quotation_by_ref_number(*, session: Session, ref_no: str) -> Tuple[Optional[Quotation], List[QuotationProduct]]:
    """Retrieve quotation by url_call and fetch its products list explicitly."""
    statement = select(Quotation).where(Quotation.url_call == ref_no)
    quotation = session.exec(statement).first()
    
    products: List[QuotationProduct] = []
    
    if quotation:
        # Fetch products explicitly by quotation_reference_number
        prod_statement = select(QuotationProduct).where(
            QuotationProduct.quotation_reference_number == quotation.quotation_reference_number
        )
        products = list(session.exec(prod_statement).all())
        
    return quotation, products

def update_quotation_by_ref_number(
    *, 
    session: Session, 
    ref_no: str, 
    payload: QuotationCreateRequest
) -> Optional[Quotation]:
    # 1. Fetch the existing quotation by url_call or quotation_reference_number
    statement = select(Quotation).where(Quotation.url_call == ref_no)
    quotation = session.exec(statement).first()

    if not quotation:
        return None

    # 2. Update parent quotation fields
    if payload.client_employee_id or payload.clientName:
        quotation.client_employee_id = payload.client_employee_id or payload.clientName
    
    quotation.additional_offer = payload.additional_emi_option
    if payload.grandTotal is not None:
        quotation.total_amount = payload.grandTotal

    session.add(quotation)

    # 3. Delete existing products for this quotation reference number
    existing_products_stmt = select(QuotationProduct).where(
        QuotationProduct.quotation_reference_number == quotation.quotation_reference_number
    )
    existing_products = session.exec(existing_products_stmt).all()
    for prod in existing_products:
        session.delete(prod)

    # 4. Insert updated items list
    for item in payload.items:
        new_prod = QuotationProduct(
            quotation_reference_number=quotation.quotation_reference_number,
            product_name=item.itemDescription,
            quantity=item.qty,
            unit=item.unit,
            price=item.rate,
            gst=item.gst,
            total=item.total
        )
        session.add(new_prod)

    # 5. Commit changes
    session.commit()
    session.refresh(quotation)
    return quotation

def get_contact_form(
    session: Session, 
    user_type: Optional[str] = None, 
    skip: int = 0, 
    limit: int = 100
) -> list[ContactForm]:
    
    statement = select(ContactForm)        
    statement = statement.offset(skip).limit(limit)
    return session.exec(statement).all()


def get_quotation_request(
    session: Session, 
    user_type: Optional[str] = None, 
    skip: int = 0, 
    limit: int = 100
) -> list[QuotationRequest]:
    
    statement = select(QuotationRequest)        
    statement = statement.offset(skip).limit(limit)
    return session.exec(statement).all()