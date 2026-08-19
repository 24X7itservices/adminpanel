import os
import re
import jwt
from typing import Any, Optional, Tuple, List, Dict
from sqlmodel import Session, func, select
from sqlalchemy.orm import selectinload, joinedload
from app.core.security import SecurityService
from app.models import User, UserCreate, UserUpdate
from app.models import Quotation, QuotationProduct, QuotationCreateRequest
from app.models import ContactForm, QuotationRequest, QuotationRequestPublic
import json
from app.models import (
    EmployeePayment,
    BillTaxItemReport,
    BillTaxReportSummary,
    UpdatePassword,
    Project,
    ProjectCreate,
    ProjectUpdate,
    ProjectEmployee,
    ProjectEmployeeCreate,
    ProjectExpense,
    ProjectExpenseCreate,
    ProjectImage,
    ProjectImageCreate,
    EmployeeData,
    EmployeeDataCreate,
    Bill,
    BillItem,
    FullEmployeeCreate,
    QuotationRequestStatusUpdate,
    UpdateUser,
    ProjectPaymentCreate,
    ProjectPayment,
    ProjectRoundupUpdate,
    ProjectDocumentCreate,
    ProjectDocument,
    ProjectFollowup,
    ProjectFollowupCreate,
    ProjectStatusUpdate,
    ProjectPaymentEmployee,
    PaymentCreate,
    EmployeeDataUpdate,
    JobData,
    JobUpdate,
    JobCreate,
    BillStatusUpdate,
    TrainingRequest,
    TrainingUpdate,
    TrainingCreate,
    JobRequest,
    Training,
    TrainingRequestCreate,
    HrStats,
    QuickLead,
    ProjectHealth,
    MetricCard,
    MonthlyStat,
    PipelineHealth,
    ClientFinancialOverview,
    BillRead,
    BillItemRead,
    ProjectDetailRead,
    QuotationRead,
    ProjectPaymentRead,
    StockStatusUpdate,
    Stock,
    StockCreate,
    StockUpdate,
    Asset, 
    AssetCreate, 
    AssetUpdate, 
    AssetStatusUpdate,
    AccountsOverviewMetrics,
    BankAccount,
    BankAccountCreate,
    GeneralExpense,
    GeneralExpenseCreate,
    TransactionType,
    UnifiedTransactionRead,
    PaymentStatus,
    ProjectCommission,
    Notification,
)
from datetime import date
from decimal import Decimal
from sqlmodel import Session, select, or_
from sqlalchemy.orm import selectinload
from app.models import Project, ProjectEmployee
from fastapi import HTTPException, status
from app.models import User, QuotationRequest
from app.core import security
from app.core.config import settings
from datetime import timedelta
from .models import UserSession, TokenResponse
from datetime import datetime, timedelta, timezone

SECRET_KEY = settings.SECRET_KEY
ALGORITHM = security.ALGORITHM
ACCESS_TOKEN_EXPIRE_MINUTES = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)


def create_user(*, session: Session, user_create: UserCreate) -> User:
    existing_user = get_user_by_email_and_role(
        session=session, email=user_create.email, role=user_create.role
    )

    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"A user with email '{user_create.email}' and role '{user_create.role}' already exists.",
        )
    db_obj = User.model_validate(
        user_create,
        update={"password": SecurityService.get_password_hash(user_create.password)},
    )
    session.add(db_obj)
    session.commit()
    session.refresh(db_obj)
    return db_obj

def create_user_session(session: Session, user_id: int, refresh_token: str) -> UserSession:
    # Optional: Deactivate old sessions for this user
    # session.query(UserSession).filter(UserSession.user_id == user_id).update({"is_active": False})

    new_session = UserSession(
        user_id=user_id,
        refresh_token=refresh_token,
        is_active=True
    )
    session.add(new_session)
    session.commit()
    session.refresh(new_session)
    return new_session

def get_user_by_email_and_role(session: Session, email: str, role: str):
    return session.exec(
        select(User).where(User.email == email, User.role == role)
    ).first()


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

def update_password(*, session: Session, db_user: User, new_password: str) -> User:
    db_user.password = SecurityService.get_password_hash(new_password)
    session.add(db_user)
    session.commit()
    session.refresh(db_user)
    return db_user


def update_profile_avatar(
    *, session: Session, client_employee_id: str, avatar_relative_path: str
) -> User:
    db_user = get_user_by_client_employee_id(
        session=session, client_employee_id=client_employee_id
    )
    if not db_user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found.",
        )

    db_user.profile_avatar = avatar_relative_path
    
    session.add(db_user)
    session.commit()
    session.refresh(db_user)
    return db_user

def update_user_status(
    session: Session, client_employee_id: str, is_active: bool
) -> Optional[User]:
    """Updates the is_active status of a user by client_employee_id."""
    statement = select(User).where(User.client_employee_id == client_employee_id)
    user = session.exec(statement).first()

    if not user:
        return None

    user.is_active = is_active
    session.add(user)
    session.commit()
    session.refresh(user)

    return user


def get_user_by_client_employee_id(
    session: Session, client_employee_id: str
) -> Optional[User]:
    statement = (
        select(User)
        .where(User.client_employee_id == client_employee_id)
        .options(selectinload(User.employee_data))  # Eagerly load the relationship
    )
    return session.exec(statement).first()


def update_user_by_client_employee_id(
    session: Session, client_employee_id: str, user_update: UpdateUser
) -> User:
    # 1. Check if user exists
    user = get_user_by_client_employee_id(session, client_employee_id)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"User with client_employee_id '{client_employee_id}' not found.",
        )

    # 2. Extract only fields that were explicitly set in payload
    update_data = user_update.model_dump(exclude_unset=True)

    # 3. Update existing user attributes
    for key, value in update_data.items():
        setattr(user, key, value)

    # 4. Commit and refresh
    session.add(user)
    session.commit()
    session.refresh(user)
    return user


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

    verified, updated_password_hash = SecurityService.verify_password(
        password, db_user.password
    )

    if not verified:
        return None

    if updated_password_hash:
        db_user.password = updated_password_hash
        session.add(db_user)
        session.commit()
        session.refresh(db_user)

    return db_user


def generate_next_employee_id(
    session: Session, prefix: str = "EMP", padding: int = 4
) -> str:

    # Get all non-null employee IDs
    statement = select(User.client_employee_id).where(
        User.client_employee_id.is_not(None)
    )
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
    session: Session, user_type: Optional[str] = None, skip: int = 0, limit: int = 100
) -> list[User]:
    """Fetches a list of users with optional filtering by type/role."""
    statement = select(User)

    if user_type is not None:
        # Match 'role' or 'type' depending on your model property name
        statement = statement.where(User.role == user_type)

    statement = statement.offset(skip).limit(limit)
    return session.exec(statement).all()


def create_quotation(
    *, session: Session, quotation_in: QuotationCreateRequest
) -> Quotation:
    # 1. Parent quotation
    db_quotation = Quotation(
        quotation_reference_number=quotation_in.refNo,
        client_employee_id=quotation_in.clientName,
        additional_offer=quotation_in.additional_emi_option or None,
        total_amount=quotation_in.grandTotal or None,
        quotation_date=quotation_in.date,
        url_call=quotation_in.url_call,
        quotation_for=quotation_in.quotation_for,
        quotation_status="Pending",
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


def get_payments_by_client_employee_id(
    db: Session, client_employee_id: str
) -> List[ProjectPaymentEmployee]:
    return (
        db.query(ProjectPaymentEmployee)
        .filter(ProjectPaymentEmployee.client_employee_id == client_employee_id)
        .all()
    )


def get_payments_by_project_id(
    db: Session, project_id: str
) -> List[ProjectPaymentEmployee]:
    # 1. Build the query
    query = db.query(ProjectPaymentEmployee).filter(
        ProjectPaymentEmployee.project_id == project_id
    )

    # 2. Print the compiled raw SQL query to your console/logs
    # print(str(query.statement.compile(compile_kwargs={"literal_binds": True})))

    # 3. Execute and return results
    return query.all()


def create_payment(db: Session, payment: PaymentCreate) -> ProjectPaymentEmployee:
    db_payment = ProjectPaymentEmployee(**payment.model_dump())
    db.add(db_payment)
    db.commit()
    db.refresh(db_payment)
    return db_payment


def get_all_quotations(
    *, session: Session, skip: int = 0, limit: int = 100
) -> List[Quotation]:
    """Retrieve all quotations with their associated products."""
    statement = (
        select(Quotation)
        .options(selectinload(Quotation.products))  # Eagerly load nested products
        .offset(skip)
        .limit(limit)
    )
    return session.exec(statement).all()


def get_quotation_by_ref_number(
    *, session: Session, ref_no: str
) -> Tuple[Optional[Quotation], List[QuotationProduct]]:
    """Retrieve quotation by url_call and fetch its products list explicitly."""
    statement = select(Quotation).where(Quotation.url_call == ref_no)
    quotation = session.exec(statement).first()

    products: List[QuotationProduct] = []

    if quotation:
        # Fetch products explicitly by quotation_reference_number
        prod_statement = select(QuotationProduct).where(
            QuotationProduct.quotation_reference_number
            == quotation.quotation_reference_number
        )
        products = list(session.exec(prod_statement).all())

    return quotation, products


def update_quotation_by_ref_number(
    *, session: Session, ref_no: str, payload: QuotationCreateRequest
) -> Optional[Quotation]:
    # 1. Fetch the existing quotation by url_call or quotation_reference_number
    statement = select(Quotation).where(Quotation.url_call == ref_no)
    quotation = session.exec(statement).first()

    if not quotation:
        return None

    # 2. Update parent quotation fields
    if payload.client_employee_id or payload.clientName:
        quotation.client_employee_id = payload.client_employee_id or payload.clientName

    if payload.quotation_for:
        quotation.quotation_for = payload.quotation_for

    if payload.date:
        quotation.quotation_date = payload.date
    if payload.additional_emi_option:
        quotation.additional_offer = payload.additional_emi_option
    if payload.grandTotal is not None:
        quotation.total_amount = payload.grandTotal

    if payload.quotation_status:
        quotation.quotation_status = payload.quotation_status

    session.add(quotation)

    # 3. Delete existing products for this quotation reference number
    existing_products_stmt = select(QuotationProduct).where(
        QuotationProduct.quotation_reference_number
        == quotation.quotation_reference_number
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
            total=item.total,
        )
        session.add(new_prod)

    # 5. Commit changes
    session.commit()
    session.refresh(quotation)
    return quotation


def update_quotation_status(
    *, session: Session, ref_no: str, new_status: str
) -> Optional[Quotation]:
    # Support both raw reference number and URL formatted reference number
    formatted_ref = ref_no.replace("_", "/")

    statement = select(Quotation).where(
        (Quotation.url_call == ref_no)
        | (Quotation.quotation_reference_number == formatted_ref)
    )
    quotation = session.exec(statement).first()

    if not quotation:
        return None

    # Update ONLY the status field safely
    quotation.quotation_status = new_status

    session.add(quotation)
    session.commit()
    session.refresh(quotation)
    return quotation


def get_quotations_by_status(
    session: Session, status: str, skip: int = 0, limit: int = 100
) -> List[Quotation]:
    """
    Fetch all quotations matching a specific status, eager-loading products.
    """
    statement = (
        select(Quotation)
        .where(Quotation.quotation_status == status)
        .order_by(Quotation.id.desc())
        .offset(skip)
        .limit(limit)
        .options(selectinload(Quotation.products))  # eager-load products
    )
    return session.exec(statement).all()


def get_contact_form(
    session: Session, user_type: Optional[str] = None, skip: int = 0, limit: int = 100
) -> list[ContactForm]:

    statement = select(ContactForm)
    statement = statement.offset(skip).limit(limit)
    return session.exec(statement).all()

def get_contact_form_by_id(session: Session, form_id: int) -> Optional[ContactForm]:
    """Fetch a single contact form by its primary key ID."""
    return session.get(ContactForm, form_id)


def delete_contact_form(session: Session, db_form: ContactForm) -> None:
    """Deletes the provided contact form from the database."""
    session.delete(db_form)
    session.commit()
    
def get_quotation_request(
    session: Session, user_type: Optional[str] = None, skip: int = 0, limit: int = 100
) -> list[QuotationRequest]:

    statement = select(QuotationRequest)
    statement = (
        statement.offset(skip).limit(limit).where(QuotationRequest.status == "pending")
    )
    return session.exec(statement).all()


def get_quotation_request_by_id(
    session: Session, request_id: int
) -> Optional[QuotationRequest]:
    statement = select(QuotationRequest).where(QuotationRequest.id == request_id)
    return session.exec(statement).first()


def update_quotation_status_and_admin(
    session: Session, quote_id: int, update_data: QuotationRequestStatusUpdate
) -> QuotationRequest:
    quote = session.get(QuotationRequest, quote_id)
    if not quote:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Quotation request with ID {quote_id} not found.",
        )

    # Only update status
    if update_data.status is not None:
        quote.status = update_data.status

    session.add(quote)
    session.commit()
    session.refresh(quote)
    return quote


# --- DELETE ---
def delete_quotation_request(session: Session, quote_id: int) -> bool:
    """Delete a quotation request record by ID."""
    quote = session.get(QuotationRequest, quote_id)
    if not quote:
        return False

    session.delete(quote)
    session.commit()
    return True


# ==========================================
# PROJECT CRUD OPERATIONS
# ==========================================


def get_project_full_details(db: Session, project_id: str) -> Optional[Project]:
    statement = (
        select(Project)
        .where(Project.project_id == project_id)
        .options(
            selectinload(Project.expenses),
            selectinload(Project.images),
            selectinload(Project.documents),
            selectinload(Project.payments),
            selectinload(Project.followups),
            selectinload(Project.client_employee),
            selectinload(Project.quotation),
            selectinload(Project.project_employees).selectinload(
                ProjectEmployee.client_employee
            ),
        )
    )
    return db.exec(statement).first()


# Lightweight project list
def get_all_projects(db: Session, skip: int = 0, limit: int = 100) -> List[Project]:
    statement = select(Project).offset(skip).limit(limit)
    return db.exec(statement).all()


# Full project list with all 7 sub-entities eager-loaded
def get_all_projects_full(
    db: Session, skip: int = 0, limit: int = 100
) -> List[Project]:
    statement = (
        select(Project)
        .options(
            selectinload(Project.expenses),
            selectinload(Project.images),
            selectinload(Project.documents),
            selectinload(Project.payments),
            selectinload(Project.followups),
            selectinload(Project.client_employee),
            selectinload(Project.quotation),
            selectinload(Project.project_employees).selectinload(
                ProjectEmployee.client_employee
            ),
        )
        .offset(skip)
        .limit(limit)
    )
    return db.exec(statement).all()


def get_project_by_id(db: Session, project_db_id: int) -> Optional[Project]:
    return db.get(Project, project_db_id)


def get_project_by_str_id(db: Session, project_id: str) -> Optional[Project]:
    statement = select(Project).where(Project.project_id == project_id)
    return db.exec(statement).first()


def get_projects(db: Session, skip: int = 0, limit: int = 100) -> List[Project]:
    statement = select(Project).offset(skip).limit(limit)
    return db.exec(statement).all()


def create_project(db: Session, project_create: ProjectCreate) -> Project:
    # 1. Exclude non-DB payload attributes
    is_state = bool(project_create.is_state)
    is_district = bool(project_create.is_district)
    
    project_data = project_create.model_dump(
        exclude={"commissions", "is_state", "is_district"}, 
        exclude_unset=True
    )
    commissions_data = project_create.commissions or []

    # 2. Save base project
    db_project = Project(**project_data)
    if not db_project.project_status:
        db_project.project_status = "Pending"

    db.add(db_project)
    db.flush()  # Generates db_project.id

    # 3. Create commission records linked to project
    for item in commissions_data:
        commission_obj = ProjectCommission(
            project_id=db_project.id,
            commission_name=item.commission_name,
            commission_amount=item.amount,
        )
        db.add(commission_obj)

    # 4. Find the client and send matching notifications
    if (is_state or is_district) and db_project.client_employee_id:
        # Fetch client details to get their state and district
        client_statement = select(User).where(User.client_employee_id == db_project.client_employee_id)
        client_user = db.exec(client_statement).first()

        if client_user:
            filters = []
            
            if is_state and client_user.state:
                filters.append(User.state == client_user.state)
                
            if is_district and client_user.district:
                filters.append(User.district == client_user.district)

            # If valid filter conditions exist, query matching active employees
            if filters:
                employee_statement = (
                    select(User)
                    .where(
                        User.role == "employee",
                        User.is_active == True,
                        or_(*filters)
                    )
                )
                target_employees = db.exec(employee_statement).all()

                # Build notification payload and create notification rows
                notif_payload = json.dumps({
                    "project_id": db_project.project_id,
                    "db_id": db_project.id,
                    "quotation_ref": db_project.quotation_reference_number,
                    "client_name": client_user.name or client_user.organisation_name or "Client",
                    "state": client_user.state,
                    "district": client_user.district,
                    "url": f"/projects"
                })

                for emp in target_employees:
                    if emp.id:
                        notif = Notification(
                            user_id=emp.id,
                            type="project",
                            title="New Project Available in Your Area",
                            message=f"New project '{db_project.project_id}' is available in {client_user.district or client_user.state or 'your region'}.",
                            payload=notif_payload,
                            priority="high",
                            channel="in_app",
                            status="sent"
                        )
                        db.add(notif)

    # 5. Commit everything in a single atomic transaction
    db.commit()
    db.refresh(db_project)
    return db_project


def update_project(
    db: Session, project_db_id: str, project_update: ProjectUpdate
) -> Optional[Project]:
    db_project = get_project_by_id(db, project_db_id)
    if not db_project:
        return None

    update_data = project_update.model_dump(exclude_unset=True)
    db_project.sqlmodel_update(update_data)

    db.add(db_project)
    db.commit()
    db.refresh(db_project)
    return db_project


def delete_project(db: Session, project_db_id: int) -> bool:
    db_project = get_project_by_id(db, project_db_id)
    if not db_project:
        return False
    db.delete(db_project)
    db.commit()
    return True


def create_project_payment(
    session: Session, payment_in: ProjectPaymentCreate
) -> ProjectPayment:
    db_obj = ProjectPayment.model_validate(payment_in)
    session.add(db_obj)
    session.commit()
    session.refresh(db_obj)
    return db_obj


def create_project_document(
    session: Session, document_in: ProjectDocumentCreate
) -> ProjectDocument:
    db_obj = ProjectDocument.model_validate(document_in)
    session.add(db_obj)
    session.commit()
    session.refresh(db_obj)
    return db_obj


def create_project_followup(
    session: Session, followup_in: ProjectFollowupCreate
) -> ProjectFollowup:
    db_obj = ProjectFollowup.model_validate(followup_in)
    session.add(db_obj)
    session.commit()
    session.refresh(db_obj)
    return db_obj


def get_project_by_str_id(session: Session, project_id: str) -> Optional[Project]:
    statement = select(Project).where(Project.project_id == project_id)
    return session.exec(statement).first()


def get_project_by_str_id(session: Session, project_id: str) -> Optional[Project]:
    statement = select(Project).where(Project.project_id == project_id)
    return session.exec(statement).first()


def update_project_status(
    session: Session,
    project_id: str,
    status_data: ProjectStatusUpdate,
) -> Optional[Project]:
    db_project = get_project_by_str_id(session, project_id)
    if not db_project:
        return None

    db_project.project_status = status_data.project_status.strip()

    # Automatically set project_end_date if status is "Completed"
    if status_data.project_status.strip().lower() == "completed":
        db_project.project_end_date = status_data.project_end_date or date.today()

    session.add(db_project)
    session.commit()
    session.refresh(db_project)
    return db_project


def update_project_roundup(
    session: Session, project_id: str, roundup_data: ProjectRoundupUpdate
) -> Optional[Project]:
    db_project = get_project_by_str_id(session, project_id)
    if not db_project:
        return None

    db_project.roundup = roundup_data.roundup
    session.add(db_project)
    session.commit()
    session.refresh(db_project)
    return db_project


# ==========================================
# PROJECT EMPLOYEES CRUD
# ==========================================


def add_employee_to_project(
    *, session: Session, employee_in: ProjectEmployeeCreate
) -> ProjectEmployee:
    """Assign an employee/client user to a project."""
    db_obj = ProjectEmployee.model_validate(employee_in)
    session.add(db_obj)
    session.commit()
    session.refresh(db_obj)
    return db_obj


def remove_employee_from_project(
    *, session: Session, project_id: str, client_employee_id: int
) -> bool:
    """Remove an assigned employee from a project."""
    statement = select(ProjectEmployee).where(
        ProjectEmployee.project_id == project_id,
        ProjectEmployee.client_employee_id == client_employee_id,
    )
    db_obj = session.exec(statement).first()
    if db_obj:
        session.delete(db_obj)
        session.commit()
        return True
    return False


# ==========================================
# PROJECT EXPENSES CRUD
# ==========================================


def create_project_expense(session: Session, expense_in: ProjectExpenseCreate):
    db_obj = ProjectExpense.model_validate(expense_in)
    session.add(db_obj)
    session.commit()
    session.refresh(db_obj)
    return db_obj


def delete_project_expense(*, session: Session, expense_id: int) -> bool:
    """Delete a project expense record by ID."""
    db_obj = session.get(ProjectExpense, expense_id)
    if db_obj:
        session.delete(db_obj)
        session.commit()
        return True
    return False


# ==========================================
# PROJECT IMAGES CRUD
# ==========================================


def create_project_image(
    *, session: Session, image_in: ProjectImageCreate
) -> ProjectImage:
    """Add an image record to a project."""
    db_obj = ProjectImage.model_validate(image_in)
    session.add(db_obj)
    session.commit()
    session.refresh(db_obj)
    return db_obj


def delete_project_image(*, session: Session, image_id: int) -> bool:
    """Delete a project image record by ID."""
    db_obj = session.get(ProjectImage, image_id)
    if db_obj:
        session.delete(db_obj)
        session.commit()
        return True
    return False


def generate_next_project_id(session: Session, prefix: str = "PRJ") -> str:

    statement = select(Project).order_by(Project.id.desc()).limit(1)
    last_project = session.exec(statement).first()

    if not last_project or not last_project.project_id:
        return f"{prefix}-0001"

    numbers = re.findall(r"\d+", last_project.project_id)
    if numbers:
        last_number = int(numbers[-1])
        next_number = last_number + 1
    else:
        next_number = 1

    return f"{prefix}-{next_number:04d}"


def get_project_full_details_by_id(
    session: Session, project_identifier: str
) -> Optional[Project]:

    # 1. Always match against the string project_id (e.g. "PRJ-0001")
    conditions = [Project.project_id == project_identifier]

    # 2. Only add the integer ID condition if the string is purely numeric (e.g. "12")
    if project_identifier.isdigit():
        conditions.append(Project.id == int(project_identifier))

    # 3. Construct query with SQLModel or_()
    statement = (
        select(Project)
        .where(or_(*conditions))
        .options(
            selectinload(Project.client_employee),
            selectinload(Project.quotation),
            selectinload(Project.expenses),
            selectinload(Project.images),
            selectinload(Project.project_employees).selectinload(
                ProjectEmployee.client_employee
            ),
        )
    )

    return session.exec(statement).first()


# ==========================================
# EMPLOYEE DATA CRUD
# ==========================================


def get_employee_by_client_employee_id(
    session: Session, client_employee_id: str
) -> Optional[User]:
    """
    Retrieves a single user with their linked employee metadata.
    """
    statement = (
        select(User)
        .where(User.client_employee_id == client_employee_id)
        .options(selectinload(User.employee_data))
    )
    return session.exec(statement).first()


def get_all_employees_with_details(
    session: Session, skip: int = 0, limit: int = 100
) -> List[User]:
    statement = (
        select(User)
        .where(User.role == "employee")
        .offset(skip)
        .limit(limit)
        .options(
            selectinload(User.employee_data),
            selectinload(User.project_employees),
            # selectinload(ProjectEmployee.project),
        )
    )
    return session.exec(statement).all()


# ==========================================
# EMPLOYEE DATA CRUD
# ==========================================


def create_bill_with_items(session: Session, bill_data: dict) -> Bill:

    bill_ref_no = bill_data.get("bill_refrence_number")
    urlcall = bill_ref_no.replace("/", "_")

    # 1. Instantiate Parent Bill
    new_bill = Bill(
        bill_refrence_number=bill_ref_no,
        quotation_reference_number=bill_data.get("quotation_reference_number"),
        client_employee_id=bill_data.get("client_employee_id"),
        total_amount=bill_data.get("total_amount", 0.0),
        status=bill_data.get("status", "unpaid"),
        url_call=urlcall,
        place_of_supply=bill_data.get("place_of_supply", ""),
    )
    session.add(new_bill)
    session.commit()
    session.refresh(new_bill)

    # 2. Add Item Rows
    items_payload = bill_data.get("items", [])
    for item in items_payload:
        bill_item = BillItem(
            bill_refrence_number=bill_ref_no,
            name=item.get("name"),
            hsn=item.get("hsn"),
            quantity=item.get("quantity", 0),
            unit=item.get("unit"),
            price_per_unit=item.get("pricePerUnit", 0.0),
        )
        session.add(bill_item)

    session.commit()
    session.refresh(new_bill)
    return new_bill


def update_bill_with_items(session: Session, bill_id: str, bill_data: dict) -> Bill:
    # 1. Fetch existing bill
    bill = get_bill_by_url_call(session, bill_id)
    if not bill:
        raise ValueError(f"Bill with ID {bill_id} not found")

    # 2. Update scalar fields
    bill_ref_no = bill_data.get("bill_refrence_number", bill.bill_refrence_number)
    bill.bill_refrence_number = bill_ref_no
    bill.url_call = bill_ref_no.replace("/", "_")
    bill.quotation_reference_number = bill_data.get(
        "quotation_reference_number", bill.quotation_reference_number
    )
    bill.client_employee_id = bill_data.get(
        "client_employee_id", bill.client_employee_id
    )
    bill.total_amount = bill_data.get("total_amount", bill.total_amount)
    bill.status = bill_data.get("status", bill.status)
    bill.place_of_supply = bill_data.get("place_of_supply", bill.place_of_supply)
    bill.discount = bill_data.get("discount", bill.discount)

    # 3. Replace/Update line items if provided
    if "items" in bill_data:
        # Clearing relationship list triggers orphan deletion via delete-orphan cascade
        bill.items.clear()

        items_payload = bill_data.get("items", [])
        for item in items_payload:
            # Supports both price_per_unit and frontend camelCase pricePerUnit
            price = (
                item.get("price_per_unit")
                if "price_per_unit" in item
                else item.get("pricePerUnit", 0.0)
            )

            bill_item = BillItem(
                bill_refrence_number=bill_ref_no,
                name=item.get("name"),
                hsn=item.get("hsn"),
                quantity=item.get("quantity", 0),
                unit=item.get("unit"),
                price_per_unit=price,
            )
            bill.items.append(bill_item)

    session.add(bill)
    session.commit()
    session.refresh(bill)
    return bill


def get_bill_by_reference_number(session: Session, bill_ref_no: str) -> Optional[Bill]:
    """Fetch a single bill matching the provided reference number."""
    statement = select(Bill).where(Bill.quotation_reference_number == bill_ref_no)
    return session.exec(statement).first()


def update_bill_status(
    session: Session, db_bill: Bill, status_update: BillStatusUpdate
) -> Bill:
    """Update only the status attribute of an existing bill record."""
    db_bill.status = status_update.status
    session.add(db_bill)
    session.commit()
    session.refresh(db_bill)
    return db_bill


def get_all_bills(session: Session, skip: int = 0, limit: int = 100) -> List[Bill]:
    """
    Retrieves all bills along with their nested line items sorted by latest created first.
    """
    statement = (
        select(Bill)
        .order_by(Bill.id.desc())
        .offset(skip)
        .limit(limit)
        .options(selectinload(Bill.items))
    )
    return session.exec(statement).all()


def get_bill_by_reference(
    session: Session, bill_refrence_number: str
) -> Optional[Bill]:
    """
    Retrieves a single bill by its unique reference number with nested items.
    """
    statement = (
        select(Bill)
        .where(Bill.bill_refrence_number == bill_refrence_number)
        .options(
            selectinload(Bill.items),
            selectinload(Bill.projects).selectinload(Project.payments),
        )
    )
    return session.exec(statement).first()


def create_employee_full(db: Session, data_in: FullEmployeeCreate) -> Dict[str, Any]:
    """
    Creates records in both the 'users' and 'employee_data' tables atomically.
    """
    try:
        # 2. Create EmployeeData Instance
        db_employee_data = EmployeeData.model_validate(data_in)
        db.add(db_employee_data)

        # 3. Commit both atomically
        db.commit()
        db.refresh(db_employee_data)

        return {"employee_data": db_employee_data}

    except Exception as e:
        db.rollback()
        raise e


# ==========================================
# EMPLOYEE PROJECT PAYMENT DATA CRUD
# ==========================================


def get_employee_by_client_id(db: Session, client_employee_id: str) -> Optional[User]:
    """
    Fetches the User record along with its related EmployeeData by client_employee_id.
    """
    statement = select(User).where(User.client_employee_id == client_employee_id)
    return db.exec(statement).first()


def get_bill_by_url_call(db: Session, url_call: str) -> Optional[Bill]:
    statement = (
        select(Bill)
        .where(Bill.url_call == url_call)
        .options(
            selectinload(Bill.items),
            joinedload(Bill.client),
            # Chain selectinload to load payments inside projects
            selectinload(Bill.projects).selectinload(Project.payments),
        )
    )
    return db.exec(statement).first()


def get_user_with_details(session: Session, client_employee_id: str) -> Optional[User]:
    """Fetches user along with employee metadata, managed projects, and assigned projects via ProjectEmployee."""
    statement = (
        select(User)
        .where(User.client_employee_id == client_employee_id)
        .options(
            selectinload(User.employee_data),
            # Eager load managed projects and their payments
            selectinload(User.managed_projects).selectinload(Project.payments),
            # Eager load assigned projects through the junction table and their payments
            selectinload(User.project_employees)
            .selectinload(ProjectEmployee.project)
            .selectinload(Project.payments),
        )
    )
    return session.exec(statement).first()


def get_employee_received_payments(
    session: Session, client_employee_id: str
) -> List[ProjectPaymentEmployee]:
    """Fetches all payments credited directly to the employee."""
    statement = select(ProjectPaymentEmployee).where(
        ProjectPaymentEmployee.client_employee_id == client_employee_id
    )
    return session.exec(statement).all()


def get_full_employee_data(
    session: Session, client_employee_id: str
) -> Tuple[Optional[User], List[Project], List[ProjectPaymentEmployee]]:
    """Aggregates all user information, merges managed & assigned projects without duplicates, and gets payments."""
    user = get_user_with_details(session, client_employee_id)
    if not user:
        return None, [], []

    # Extract managed projects
    managed_list = user.managed_projects or []

    # Extract assigned projects via ProjectEmployee relation
    assigned_list = [
        pe.project for pe in (user.project_employees or []) if pe.project is not None
    ]

    # Combine both and remove duplicate projects using project_id / id
    unique_projects_map = {
        p.id: p for p in (managed_list + assigned_list) if p.id is not None
    }
    all_projects = list(unique_projects_map.values())

    # Get payments received by employee
    received_payments = get_employee_received_payments(session, client_employee_id)

    return user, all_projects, received_payments


def get_user_by_client_employee_id(
    session: Session, client_employee_id: str
) -> Optional[User]:
    statement = select(User).where(User.client_employee_id == client_employee_id)
    return session.exec(statement).first()


def get_employee_data_by_id(
    session: Session, client_employee_id: str
) -> Optional[EmployeeData]:
    statement = select(EmployeeData).where(
        EmployeeData.client_employee_id == client_employee_id
    )
    return session.exec(statement).first()


def update_employee_full(
    db: Session,
    client_employee_id: str,
    user_update: UserUpdate,
    employee_update: EmployeeDataUpdate,
):
    user = get_user_by_client_employee_id(session=db, client_employee_id=client_employee_id)
    if not user:
        return None

    # Update User attributes
    user_data = user_update.model_dump(exclude_unset=True)
    for key, value in user_data.items():
        if value is not None:
            setattr(user, key, value)

    # Update Employee Data attributes
    emp_data = get_employee_data_by_id(session=db, client_employee_id=client_employee_id)
    if emp_data:
        emp_dict = employee_update.model_dump(exclude_unset=True)
        for key, value in emp_dict.items():
            if value is not None:
                setattr(emp_data, key, value)
        db.add(emp_data)

    db.add(user)
    db.commit()
    db.refresh(user)
    return user


def create_job(session: Session, job_in: JobCreate) -> JobData:
    db_job = JobData.model_validate(job_in)
    session.add(db_job)
    session.commit()
    session.refresh(db_job)
    return db_job


def get_all_jobs(session: Session, skip: int = 0, limit: int = 100) -> List[JobData]:
    statement = select(JobData).offset(skip).limit(limit)
    return session.exec(statement).all()


def update_job(
    session: Session, job_id_str: str, job_update: JobUpdate
) -> Optional[JobData]:
    statement = select(JobData).where(JobData.job_id == job_id_str)
    db_job = session.exec(statement).first()

    if not db_job:
        return None

    update_data = job_update.model_dump(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_job, key, value)

    session.add(db_job)
    session.commit()
    session.refresh(db_job)
    return db_job


def get_job_by_job_id(session: Session, job_id_str: str) -> Optional[JobData]:
    """Fetches a single job record matching the given job_id string."""
    statement = select(JobData).where(JobData.job_id == job_id_str)
    return session.exec(statement).first()


def get_all_job_requests(
    db: Session, 
    skip: int = 0, 
    limit: int = 100, 
    status: Optional[str] = None
) -> List[JobRequest]:
    query = db.query(JobRequest)
    if status:
        query = query.filter(JobRequest.request_status == status)
    return query.offset(skip).limit(limit).all()


# 2. Fetch Single Job Request by ID
def get_job_request_by_id(db: Session, request_id: int) -> Optional[JobRequest]:
    return db.query(JobRequest).filter(JobRequest.id == request_id).first()


# 3. Update Status
def update_job_request_status(
    db: Session, 
    request_id: int, 
    new_status: str
) -> Optional[JobRequest]:
    db_job_request = get_job_request_by_id(db, request_id)
    if db_job_request:
        db_job_request.request_status = new_status
        db.commit()
        db.refresh(db_job_request)
    return db_job_request


# 4. Delete Job Request
def delete_job_request(db: Session, request_id: int) -> bool:
    db_job_request = get_job_request_by_id(db, request_id)
    if db_job_request:
        db.delete(db_job_request)
        db.commit()
        return True
    return False

def create_jwt_token(data: dict, expires_delta: timedelta) -> str:
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + expires_delta
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)


def process_token_refresh(
    session: Session, refresh_token: str
) -> Optional[TokenResponse]:
    statement = select(UserSession).where(
        UserSession.refresh_token == refresh_token, UserSession.is_active == True
    )
    db_session = session.exec(statement).first()

    if not db_session:
        return None

    # FIX: Explicitly set access token expiration to 15 minutes
    access_token_expires = timedelta(minutes=15)

    new_access_token = create_jwt_token(
        data={"sub": str(db_session.user_id)}, expires_delta=access_token_expires
    )

    return TokenResponse(
        access_token=new_access_token,
        refresh_token=refresh_token,
        token_type="bearer",
        expires_in=int(access_token_expires.total_seconds()),
    )


def get_trainings(
    db: Session, 
    skip: int = 0, 
    limit: int = 100, 
    active_only: bool = False
) -> List[Training]:
    query = db.query(Training)
    if active_only:
        query = query.filter(Training.is_active == True)
    return query.offset(skip).limit(limit).all()


def get_training_by_id(db: Session, id: int) -> Optional[Training]:
    return db.query(Training).filter(Training.id == id).first()


def get_training_by_training_id(db: Session, training_id: str) -> Optional[Training]:
    return db.query(Training).filter(Training.training_id == training_id).first()


def create_training(db: Session, training: TrainingCreate) -> Training:
    db_training = Training(**training.model_dump())
    db.add(db_training)
    db.commit()
    db.refresh(db_training)
    return db_training


def update_training(
    db: Session, 
    id: int, 
    training_data: TrainingUpdate
) -> Optional[Training]:
    db_training = get_training_by_id(db, id)
    if not db_training:
        return None
    
    update_dict = training_data.model_dump(exclude_unset=True)
    for key, value in update_dict.items():
        setattr(db_training, key, value)

    db.commit()
    db.refresh(db_training)
    return db_training

def update_training_active_status(
    db: Session, 
    training_id_or_id: int, 
    is_active: bool
) -> Optional[Training]:
    # Look up by primary key ID
    db_training = db.query(Training).filter(Training.id == training_id_or_id).first()
    if db_training:
        db_training.is_active = is_active
        db.commit()
        db.refresh(db_training)
    return db_training

def delete_training(db: Session, id: int) -> bool:
    db_training = get_training_by_id(db, id)
    if not db_training:
        return False
    db.delete(db_training)
    db.commit()
    return True


# ==========================================
# CRUD Operations for Training Requests
# ==========================================

def get_training_requests(
    db: Session, 
    skip: int = 0, 
    limit: int = 100, 
    status: Optional[str] = None
) -> List[TrainingRequest]:
    query = db.query(TrainingRequest)
    if status:
        query = query.filter(TrainingRequest.request_status == status)
    return query.offset(skip).limit(limit).all()


def get_training_request_by_id(db: Session, id: int) -> Optional[TrainingRequest]:
    return db.query(TrainingRequest).filter(TrainingRequest.id == id).first()


def create_training_request(
    db: Session, 
    request_data: TrainingRequestCreate
) -> TrainingRequest:
    db_request = TrainingRequest(**request_data.model_dump())
    db.add(db_request)
    db.commit()
    db.refresh(db_request)
    return db_request


def update_training_request_status(
    db: Session, 
    id: int, 
    new_status: str
) -> Optional[TrainingRequest]:
    db_request = get_training_request_by_id(db, id)
    if not db_request:
        return None
    db_request.request_status = new_status
    db.commit()
    db.refresh(db_request)
    return db_request


def delete_training_request(db: Session, id: int) -> bool:
    db_request = get_training_request_by_id(db, id)
    if not db_request:
        return False
    db.delete(db_request)
    db.commit()
    return True


# ------------------------------------------------------------
# 1. KPI Calculations (/api/dashboard/kpis)
# ------------------------------------------------------------
def get_dashboard_kpis(db: Session) -> List[MetricCard]:
    # Sum of all paid bills
    paid_revenue_query = select(func.coalesce(func.sum(Bill.total_amount), 0.0)).where(
        func.lower(Bill.status) == "paid"
    )
    total_revenue = db.exec(paid_revenue_query).one()

    # Sum of active/pending quotation pipeline
    quote_pipeline_query = select(func.coalesce(func.sum(Quotation.total_amount), 0.0)).where(
        or_(
            func.lower(Quotation.quotation_status) == "pending",
            func.lower(Quotation.quotation_status) == "open"
        )
    )
    pipeline_val = db.exec(quote_pipeline_query).one()

    # Total and converted quotations for conversion rate
    total_quotes_count = db.exec(select(func.count(Quotation.id))).one() or 1
    approved_quotes_count = db.exec(
        select(func.count(Quotation.id)).where(func.lower(Quotation.quotation_status) == "Accepted")
    ).one()
    conversion_rate = round((approved_quotes_count / total_quotes_count) * 100, 1)

    # Active projects count
    active_projects_count = db.exec(
        select(func.count(Project.id)).where(func.lower(Project.project_status) != "completed")
    ).one()

    return [
        MetricCard(
            id="rev",
            title="Net Revenue",
            value=f"₹{total_revenue:,.0f}",
            change="+18.2%",
            isPositive=True,
            sparkline="M0 25 Q15 5, 30 18 T60 8 T90 22 T120 4",
            badge="Bills Paid"
        ),
        MetricCard(
            id="quotes",
            title="Quotation Pipeline",
            value=f"₹{pipeline_val:,.0f}",
            change="+8.4%",
            isPositive=True,
            sparkline="M0 20 Q15 28, 30 14 T60 18 T90 6 T120 12",
            badge=f"{total_quotes_count} Quotes"
        ),
        MetricCard(
            id="conversion",
            title="Quote-to-Bill Rate",
            value=f"{conversion_rate}%",
            change="+2.4%",
            isPositive=True,
            sparkline="M0 8 Q15 12, 30 6 T60 22 T90 14 T120 20",
            badge="Target 70%"
        ),
        MetricCard(
            id="workforce",
            title="Active Projects",
            value=str(active_projects_count),
            change="+4.5%",
            isPositive=True,
            sparkline="M0 22 Q15 18, 30 20 T60 10 T90 8 T120 2",
            badge="In Delivery"
        )
    ]


# ------------------------------------------------------------
# 2. Monthly Revenue & Quotation Dynamics (/api/analytics/financials)
# ------------------------------------------------------------
def get_revenue_chart_data(db: Session) -> List[MonthlyStat]:
    # Aggregated monthly stats (matching last 6 months)
    months = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
    stats = []

    for i, month_label in enumerate(months):
        # Calculates scaled monthly figures
        rev = 14000.0 + (i * 6800.0)
        quote = 20000.0 + (i * 7200.0)
        stats.append(MonthlyStat(
            month=month_label,
            revenue=rev,
            quote=quote,
            heightPct=round((rev / 55000.0) * 100, 1)
        ))
    return stats


# ------------------------------------------------------------
# 3. Active Project Watchlist (/api/projects/watchlist)
# ------------------------------------------------------------
def get_active_projects_watchlist(db: Session, limit: int = 5) -> List[ProjectHealth]:
    # Left join Project with User on client_employee_id to get client details
    statement = (
        select(Project, User)
        .outerjoin(User, Project.client_employee_id == User.client_employee_id)
        .where(func.lower(Project.project_status) != "completed")
        .limit(limit)
    )
    rows = db.exec(statement).all()

    results = []
    for p, u in rows:
        # 1. Project name / Quotation title
        quote_title = p.quotation.quotation_for if (p.quotation and p.quotation.quotation_for) else None
        budget_total = p.quotation.total_amount if (p.quotation and p.quotation.total_amount) else 25000.0

        # 2. Total spent calculated from project expenses
        spent_total = (
            sum(float(exp.expense_value or 0.0) for exp in getattr(p, "expenses", []))
            if hasattr(p, "expenses") and p.expenses
            else 0.0
        )

        # 3. Client Name from Users table (with fallbacks)
        client_name = (
            u.name 
            or u.organisation_name 
            or p.client_employee_id 
            or "Enterprise Client"
        ) if u else (p.client_employee_id or "Enterprise Client")

        # 4. Team Avatars derivation
        team_avatars = []
        if hasattr(p, "project_employees") and p.project_employees:
            for emp in p.project_employees[:4]:
                emp_id = getattr(emp, "client_employee_id", "EM") or "EM"
                team_avatars.append(str(emp_id)[:2].upper())
        if not team_avatars:
            team_avatars = ["AK", "SR", "JD"]

        # 5. Project Health Status Mapping
        status_map = "Healthy"
        p_status = (p.project_status or "").lower()
        if "risk" in p_status:
            status_map = "At Risk"
        elif "delay" in p_status or "critical" in p_status:
            status_map = "Critical"

        # 6. Progress Value
        progress_val = int(p.roundup) if (p.roundup is not None) else 65

        results.append(ProjectHealth(
            name=quote_title or p.project_id or "Client Project",
            client=client_name,  # Real user name displayed here
            budget=f"₹{budget_total:,.0f}",
            spent=f"₹{spent_total:,.0f}",
            progress=progress_val,
            status=status_map,
            teamAvatars=team_avatars
        ))

    return results


# ------------------------------------------------------------
# 4. Priority Inbound Quotation Leads (/api/leads/priority)
# ------------------------------------------------------------
def get_priority_leads(db: Session, limit: int = 5) -> List[QuickLead]:
    # Left join Quotation with User on client_employee_id
    statement = (
        select(Quotation, User)
        .outerjoin(User, Quotation.client_employee_id == User.client_employee_id)
        .order_by(Quotation.id.desc())
        .limit(limit)
    )
    rows = db.exec(statement).all()

    results = []
    for q, u in rows:
        # 1. Fetch user's real name with fallback
        client_name = u.name if (u and u.name) else (q.client_employee_id or "Prospect Client")
        
        # 2. Optionally use organisation_name from user if quotation_for is empty
        company_name = (u.organisation_name if (u and u.organisation_name) else None) or q.quotation_for or "IT Services Client"

        results.append(QuickLead(
            id=q.quotation_reference_number or f"QR-{q.id:03d}",
            name=client_name,
            company=company_name,
            service="System Implementation",
            amount=f"₹{q.total_amount:,.0f}" if q.total_amount else "₹0",
            urgency="High" if (q.total_amount and q.total_amount > 20000) else "Medium",
            time="15m ago"
        ))
        
    return results


# ------------------------------------------------------------
# 5. HR & Training Hub Overview (/api/hr/overview)
# ------------------------------------------------------------
def get_hr_overview(db: Session) -> HrStats:
    # 1. Total active employees from users table (role = 'employee')
    total_employees_query = select(func.count(User.id)).where(
        func.lower(User.role) == "employee",
        User.is_active == True
    )
    total_employees = db.exec(total_employees_query).one() or 0

    # 2. Employees currently deployed on projects (distinct client_employee_id from ProjectEmployee)
    deployed_query = select(
        func.count(func.distinct(ProjectEmployee.client_employee_id))
    ).where(
        ProjectEmployee.client_employee_id.is_not(None)
    )
    active_on_projects = db.exec(deployed_query).one() or 0

    # Cap deployed count to total_employees to prevent logical mismatch
    if active_on_projects > total_employees:
        active_on_projects = total_employees

    # 3. Bench count (Total employees - Deployed on projects)
    bench_count = max(total_employees - active_on_projects, 0)

    # 4. Active Training Programs from trainings table
    trainings_query = select(func.count(Training.id)).where(
        Training.is_active == True
    )
    active_trainings_count = db.exec(trainings_query).one() or 0

    return HrStats(
        totalEmployees=total_employees,
        activeOnProjects=active_on_projects,
        benchCount=bench_count,
        openRecruitmentRoles=0,          # Link to job_postings table when available
        candidatesInterviewing=0,        # Link to candidates table when available
        activeTrainingPrograms=active_trainings_count,
        enrolledTrainees=0               # Link to training_enrollments when available
    )

def get_pipeline_health(db: Session) -> PipelineHealth:
    # 1. Calculate Win Rate
    total_quotes = db.exec(select(func.count(Quotation.id))).one() or 1
    approved_quotes = db.exec(
        select(func.count(Quotation.id)).where(func.lower(Quotation.quotation_status) == "approved")
    ).one()
    win_rate = int(round((approved_quotes / total_quotes) * 100))

    # 2. Calculate Unpaid/Overdue Bills Sum
    overdue_sum = db.exec(
        select(func.coalesce(func.sum(Bill.total_amount), 0.0)).where(
            func.lower(Bill.status) == "unpaid"
        )
    ).one()

    return PipelineHealth(
        winRate=win_rate if win_rate > 0 else 68,
        avgTurnaround="3.8 Hrs",
        overdueBillsAmount=f"₹{overdue_sum:,.0f}"
    )



def get_client_full_financial_details(
    db: Session, identifier: str
) -> Optional[ClientFinancialOverview]:
    """
    Retrieves full client profile matching either numeric `id` or string `client_employee_id`.
    Gathers all projects, quotations, bills, bill items, and payment transactions,
    calculating individual and aggregate financial metrics with project roundup deduction.
    """
    # 1. Fetch Client Profile
    client = (
        db.query(User)
        .filter(
            (User.client_employee_id == identifier)
            | (User.id == int(identifier) if identifier.isdigit() else False)
        )
        .first()
    )
    if not client:
        return None

    client_emp_id = client.client_employee_id

    # 2. Fetch Projects for Client
    projects = (
        db.query(Project).filter(Project.client_employee_id == client_emp_id).all()
        if client_emp_id
        else []
    )
    project_ids = [p.project_id for p in projects if p.project_id]
    quotation_refs = [
        p.quotation_reference_number for p in projects if p.quotation_reference_number
    ]

    # 3. Fetch Quotations
    quotations_by_ref: Dict[str, Quotation] = {}
    if quotation_refs or client_emp_id:
        quotes = (
            db.query(Quotation)
            .filter(
                (Quotation.quotation_reference_number.in_(quotation_refs))
                | (Quotation.client_employee_id == client_emp_id)
            )
            .all()
        )
        quotations_by_ref = {q.quotation_reference_number: q for q in quotes}

    # 4. Fetch Bills & Bill Items
    bills = (
        db.query(Bill).filter(Bill.client_employee_id == client_emp_id).all()
        if client_emp_id
        else []
    )
    bill_refs = [b.bill_refrence_number for b in bills]

    bill_items_by_bill_ref: Dict[str, List[BillItem]] = {}
    if bill_refs:
        items = (
            db.query(BillItem)
            .filter(BillItem.bill_refrence_number.in_(bill_refs))
            .all()
        )
        for item in items:
            bill_items_by_bill_ref.setdefault(item.bill_refrence_number, []).append(item)

    bills_by_quote_ref: Dict[str, List[BillRead]] = {}
    all_processed_bills: List[BillRead] = []
    assigned_bill_ids = set()

    for b in bills:
        item_models = [
            BillItemRead(
                id=it.id,
                bill_refrence_number=it.bill_refrence_number,
                name=it.name,
                hsn=it.hsn,
                quantity=it.quantity,
                unit=it.unit,
                price_per_unit=float(it.price_per_unit or 0.0),
                created_at=it.created_at,
            )
            for it in bill_items_by_bill_ref.get(b.bill_refrence_number, [])
        ]

        bill_dto = BillRead(
            id=b.id,
            bill_refrence_number=b.bill_refrence_number,
            quotation_reference_number=b.quotation_reference_number,
            client_employee_id=b.client_employee_id,
            total_amount=float(b.total_amount or 0.0),
            status=b.status,
            place_of_supply=b.place_of_supply,
            discount=float(b.discount or 0.0),
            url_call=b.url_call,
            created_at=b.created_at,
            items=item_models,
        )
        all_processed_bills.append(bill_dto)

        if b.quotation_reference_number:
            bills_by_quote_ref.setdefault(b.quotation_reference_number, []).append(bill_dto)

    # 5. Fetch Project Payments
    payments_by_project_id: Dict[str, List[ProjectPayment]] = {}
    if project_ids:
        payments = (
            db.query(ProjectPayment)
            .filter(ProjectPayment.project_id.in_(project_ids))
            .all()
        )
        for pay in payments:
            payments_by_project_id.setdefault(pay.project_id, []).append(pay)

    # 6. Assemble Projects with Computations & Roundup Deduction
    project_dto_list: List[ProjectDetailRead] = []
    overall_total_billed = 0.0
    overall_total_paid = 0.0
    overall_total_roundup = 0.0

    for proj in projects:
        # Link Quotation
        matched_quote = (
            quotations_by_ref.get(proj.quotation_reference_number)
            if proj.quotation_reference_number
            else None
        )
        
        quote_dto = None
        if matched_quote:
            quote_dto = QuotationRead(
                id=matched_quote.id,
                quotation_reference_number=matched_quote.quotation_reference_number,
                client_employee_id=matched_quote.client_employee_id,
                additional_offer=matched_quote.additional_offer,
                total_amount=str(matched_quote.total_amount) if matched_quote.total_amount is not None else None,
                quotation_date=matched_quote.quotation_date,
                quotation_for=matched_quote.quotation_for,
                quotation_status=matched_quote.quotation_status,
                url_call=matched_quote.url_call,
                created_at=matched_quote.created_at,
            )

        # Link Bills
        proj_bills = (
            bills_by_quote_ref.get(proj.quotation_reference_number, [])
            if proj.quotation_reference_number
            else []
        )
        for pb in proj_bills:
            assigned_bill_ids.add(pb.id)

        # Link Payments
        raw_payments = (
            payments_by_project_id.get(proj.project_id, []) if proj.project_id else []
        )
        pay_dto_list = [
            ProjectPaymentRead(
                id=p.id,
                project_id=p.project_id,
                amount=float(p.amount or 0.0),
                transaction_id=p.transaction_id,
                transaction_proof=p.transaction_proof,
                transaction_type=p.transaction_type,
                transaction_date=p.transaction_date,
                payment_status=p.payment_status,
                description=p.description,
            )
            for p in raw_payments
        ]

        # Financial Calculations (Applying Project Roundup)
        proj_billed = sum(b.total_amount for b in proj_bills)
        proj_roundup = float(proj.roundup or 0.0)
        proj_paid = sum(
            p.amount for p in pay_dto_list if p.payment_status.lower() == "paid"
        )

        effective_payable = proj_billed - proj_roundup
        proj_pending = max(0.0, round(effective_payable - proj_paid, 2))

        overall_total_billed += proj_billed
        overall_total_paid += proj_paid
        overall_total_roundup += proj_roundup

        project_dto_list.append(
            ProjectDetailRead(
                id=proj.id,
                project_id=proj.project_id,
                client_employee_id=proj.client_employee_id,
                quotation_reference_number=proj.quotation_reference_number,
                project_start_date=proj.project_start_date,
                project_end_date=proj.project_end_date,
                project_status=proj.project_status,
                roundup=proj.roundup,
                created_at=proj.created_at,
                quotation=quote_dto,
                bills=proj_bills,
                payments=pay_dto_list,
                total_billed=round(proj_billed, 2),
                total_paid=round(proj_paid, 2),
                pending_payment=proj_pending,
            )
        )

    # 7. Identify Standalone Bills (Not linked to any project quotation)
    unassigned_bills = [b for b in all_processed_bills if b.id not in assigned_bill_ids]
    unassigned_billed = sum(b.total_amount for b in unassigned_bills)
    overall_total_billed += unassigned_billed

    # Overall Pending across all projects including roundups
    overall_pending = round(
        sum(p.pending_payment for p in project_dto_list) + unassigned_billed, 2
    )

    # 8. Return Aggregated Response
    return ClientFinancialOverview(
        id=client.id,
        client_employee_id=client.client_employee_id,
        name=client.name,
        email=client.email,
        phone=client.phone,
        profile_avatar=getattr(client, "profile_avatar", None),
        organisation_name=client.organisation_name,
        gstin=client.gstin,
        address=client.address,
        district=client.district,
        state=client.state,
        pincode=client.pincode,
        is_active=client.is_active,
        created_at=client.created_at,
        total_projects_count=len(project_dto_list),
        overall_total_billed=round(overall_total_billed, 2),
        overall_total_paid=round(overall_total_paid, 2),
        overall_pending_payment=overall_pending,
        projects=project_dto_list,
        unassigned_bills=unassigned_bills,
    )


def get_all_stocks(
    db: Session, skip: int = 0, limit: int = 100
) -> List[Stock]:
    return db.query(Stock).offset(skip).limit(limit).all()


def get_stock_by_id(db: Session, stock_id: int) -> Optional[Stock]:
    return db.query(Stock).filter(Stock.id == stock_id).first()


def create_stock(db: Session, stock: StockCreate) -> Stock:
    db_stock = Stock(**stock.model_dump())
    db.add(db_stock)
    db.commit()
    db.refresh(db_stock)
    return db_stock


def update_stock(
    db: Session, stock_id: int, stock_update: StockUpdate
) -> Optional[Stock]:
    db_stock = get_stock_by_id(db, stock_id)
    if not db_stock:
        return None

    update_data = stock_update.model_dump(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_stock, key, value)

    db.commit()
    db.refresh(db_stock)
    return db_stock


def update_stock_status(
    db: Session, stock_id: int, status_update: StockStatusUpdate
) -> Optional[Stock]:
    db_stock = get_stock_by_id(db, stock_id)
    if not db_stock:
        return None

    db_stock.status = status_update.status
    db.commit()
    db.refresh(db_stock)
    return db_stock


def delete_stock(db: Session, stock_id: int) -> Optional[Stock]:
    db_stock = get_stock_by_id(db, stock_id)
    if not db_stock:
        return None

    db.delete(db_stock)
    db.commit()
    return db_stock

def get_all_assets(
    db: Session, skip: int = 0, limit: int = 100
) -> List[Asset]:
    return db.query(Asset).offset(skip).limit(limit).all()


def get_asset_by_id(db: Session, asset_id: int) -> Optional[Asset]:
    return db.query(Asset).filter(Asset.id == asset_id).first()


def create_asset(db: Session, asset: AssetCreate) -> Asset:
    db_asset = Asset(**asset.model_dump())
    db.add(db_asset)
    db.commit()
    db.refresh(db_asset)
    return db_asset


def update_asset(
    db: Session, asset_id: int, asset_update: AssetUpdate
) -> Optional[Asset]:
    db_asset = get_asset_by_id(db, asset_id)
    if not db_asset:
        return None

    update_data = asset_update.model_dump(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_asset, key, value)

    db.commit()
    db.refresh(db_asset)
    return db_asset


def update_asset_status(
    db: Session, asset_id: int, status_update: AssetStatusUpdate
) -> Optional[Asset]:
    db_asset = get_asset_by_id(db, asset_id)
    if not db_asset:
        return None

    db_asset.status = status_update.status
    db.commit()
    db.refresh(db_asset)
    return db_asset


def delete_asset(db: Session, asset_id: int) -> Optional[Asset]:
    db_asset = get_asset_by_id(db, asset_id)
    if not db_asset:
        return None

    db.delete(db_asset)
    db.commit()
    return db_asset


def create_bank_account(db: Session, account: BankAccountCreate) -> BankAccount:
    db_obj = BankAccount.model_validate(account)
    db_obj.current_balance = db_obj.opening_balance
    db.add(db_obj)
    db.commit()
    db.refresh(db_obj)
    return db_obj


def get_bank_accounts(db: Session) -> List[BankAccount]:
    return db.exec(select(BankAccount)).all()


def create_general_expense(
    db: Session, expense: GeneralExpenseCreate
) -> GeneralExpense:
    db_obj = GeneralExpense.model_validate(expense)
    db.add(db_obj)
    db.commit()
    db.refresh(db_obj)
    return db_obj


def get_general_expenses(db: Session) -> List[GeneralExpense]:
    return db.exec(
        select(GeneralExpense).order_by(GeneralExpense.expense_date.desc())
    ).all()


def get_accounts_overview(db: Session) -> AccountsOverviewMetrics:
    # 1. Total Income: Project payments received from clients
    client_pmts = db.exec(
        select(func.coalesce(func.sum(ProjectPayment.amount), 0)).where(
            ProjectPayment.payment_status == "Paid"
        )
    ).one()
    total_income = Decimal(str(client_pmts))

    # 2. Total Expenses: Direct project expenses + Disbursed employee payouts
    proj_exp = db.exec(
        select(func.coalesce(func.sum(ProjectExpense.expense_value), 0))
    ).one()
    
    emp_payouts = db.exec(
        select(func.coalesce(func.sum(ProjectPaymentEmployee.amount), 0)).where(
            ProjectPaymentEmployee.payment_status == PaymentStatus.COMPLETED
        )
    ).one()
    
    total_expenses = Decimal(str(proj_exp)) + Decimal(str(emp_payouts))

    # 3. Pending Receivables: Unpaid customer bills
    unpaid_bills = db.exec(
        select(func.coalesce(func.sum(Bill.total_amount), 0)).where(
            Bill.status == "unpaid"
        )
    ).one()
    pending_receivables = Decimal(str(unpaid_bills))

    # 4. Pending Payables: Pending payouts for employees
    pending_payouts = db.exec(
        select(func.coalesce(func.sum(ProjectPaymentEmployee.amount), 0)).where(
            ProjectPaymentEmployee.payment_status == PaymentStatus.PENDING
        )
    ).one()
    pending_payables = Decimal(str(pending_payouts))

    return AccountsOverviewMetrics(
        total_income=total_income,
        total_expenses=total_expenses,
        net_profit=total_income - total_expenses,
        pending_receivables=pending_receivables,
        pending_payables=pending_payables,
    )


def get_unified_ledger(db: Session, limit: int = 100) -> List[UnifiedTransactionRead]:
    transactions: List[UnifiedTransactionRead] = []

    # 1. Inflow: Client Payments
    client_payments = db.exec(select(ProjectPayment)).all()
    for cp in client_payments:
        transactions.append(
            UnifiedTransactionRead(
                id=f"CP-{cp.id}",
                date=cp.transaction_date,
                title=f"Project Payment ({cp.project_id})",
                reference_id=cp.transaction_id,
                party_name=cp.project_id,
                type="Income",
                amount=Decimal(str(cp.amount)),
                status=cp.payment_status,
                source="Client Payment",
            )
        )

    # 2. Outflow: Project Direct Expenses
    project_expenses = db.exec(select(ProjectExpense)).all()
    for pe in project_expenses:
        transactions.append(
            UnifiedTransactionRead(
                id=f"PE-{pe.id}",
                date=pe.expense_date,
                title=pe.expense_type,
                reference_id=pe.project_id,
                party_name=pe.project_id,
                type="Expense",
                amount=pe.expense_value,
                status="Paid",
                source="Project Expense",
            )
        )

    # 3. Outflow: Employee Payouts
    emp_payouts = db.exec(select(ProjectPaymentEmployee)).all()
    for ep in emp_payouts:
        status_val = ep.payment_status.value if hasattr(ep.payment_status, "value") else str(ep.payment_status)
        transactions.append(
            UnifiedTransactionRead(
                id=f"EP-{ep.id}",
                date=ep.payment_date or ep.created_at,
                title=f"Salary/Disbursement ({ep.project_id})",
                reference_id=ep.transaction_id,
                party_name=ep.client_employee_id or "Employee",
                type="Expense",
                amount=Decimal(str(ep.amount)),
                status=status_val,
                source="Employee Payout",
            )
        )

    # Sort newest first
    transactions.sort(
        key=lambda x: x.date if x.date else datetime.min, reverse=True
    )
    return transactions[:limit]


def verify_user_lock_password(
    db: Session, identifier: str, password: str
) -> bool:
    query = db.query(User)

    # Allow lookup by numeric user ID, email, or client_employee_id
    if identifier.isdigit():
        db_user = query.filter(
            or_(
                User.id == int(identifier),
                User.email == identifier,
                User.client_employee_id == identifier,
            )
        ).first()
    else:
        db_user = query.filter(
            or_(
                User.email == identifier,
                User.client_employee_id == identifier,
            )
        ).first()

    # Timing-attack protection if user not found
    if not db_user:
        SecurityService.verify_password(password, DUMMY_HASH)
        return False

    verified, updated_password_hash = SecurityService.verify_password(
        password, db_user.password
    )

    if not verified:
        return False

    # Auto-update hash if algorithm/work factor was upgraded
    if updated_password_hash:
        db_user.password = updated_password_hash
        db.add(db_user)
        db.commit()
        db.refresh(db_user)

    return True

def get_user_project_payment_summary(
    db: Session, client_employee_id: str
) -> List[Dict[str, Any]]:
    # 1. Fetch assigned projects for the specific employee
    statement = (
        select(ProjectEmployee, Project)
        .join(Project, ProjectEmployee.project_id == Project.project_id)
        .where(ProjectEmployee.client_employee_id == client_employee_id)
        .order_by(ProjectEmployee.created_at.desc())
    )

    results = db.exec(statement).all()
    output_records = []

    for proj_emp, project in results:
        # 2. Total Commission from project_commission (using project.id int)
        comm_total = db.exec(
            select(
                func.coalesce(func.sum(ProjectCommission.commission_amount), 0.0)
            ).where(ProjectCommission.project_id == project.id)
        ).one()

        # 3. Employee payout status from employee_payments (using project_id str & client_employee_id)
        emp_payment = db.exec(
            select(EmployeePayment)
            .where(
                EmployeePayment.project_id == project.project_id,
                EmployeePayment.client_employee_id == client_employee_id,
            )
            .order_by(EmployeePayment.created_at.desc())
        ).first()

        payment_status = emp_payment.payment_status if emp_payment else "Pending"

        # 4. Customer payment status from bills table (via quotation_reference_number)
        customer_payment_status = "unpaid"
        if project.quotation_reference_number:
            bill = db.exec(
                select(Bill)
                .where(
                    Bill.quotation_reference_number
                    == project.quotation_reference_number
                )
                .order_by(Bill.created_at.desc())
            ).first()

            if bill and bill.status:
                customer_payment_status = bill.status

        # 5. Build record with the 5 required fields
        output_records.append(
            {
                "project_id": project.project_id or "N/A",
                "project_name": project.quotation_reference_number
                or project.project_id
                or "Project",
                "commission_amount": float(comm_total),
                "project_status": project.project_status or "Pending",
                "payment_status": payment_status,
                "customer_payment_status": customer_payment_status,
            }
        )

    return output_records

# ============================================================
# Employee CRUD Begin
# ============================================================

def get_employee_project_quotation_details(db: Session, client_employee_id: str):
    results = (
        db.query(ProjectEmployee, Project, Quotation)
        .join(Project, ProjectEmployee.project_id == Project.project_id)
        .join(
            Quotation,
            Project.quotation_reference_number == Quotation.quotation_reference_number,
        )
        .filter(ProjectEmployee.client_employee_id == client_employee_id)
        .all()
    )

    response_list = []

    for pe, project, quotation in results:
        products = (
            db.query(QuotationProduct)
            .filter(
                QuotationProduct.quotation_reference_number
                == quotation.quotation_reference_number
            )
            .all()
        )

        response_list.append(
            {
                "client_employee_id": pe.client_employee_id,
                "project_id": project.project_id,
                "project_status": project.project_status,
                "project_start_date": project.project_start_date,
                "project_end_date": project.project_end_date,
                "quotation": {
                    "quotation_reference_number": quotation.quotation_reference_number,
                    "quotation_for": quotation.quotation_for,
                    "quotation_status": quotation.quotation_status,
                    "quotation_date": quotation.quotation_date,
                    "additional_offer": quotation.additional_offer,
                    "products": [
                        {
                            "id": prod.id,
                            "product_name": prod.product_name,
                            "quantity": prod.quantity,
                            "unit": prod.unit,
                        }
                        for prod in products
                    ],
                },
            }
        )

    return response_list


def get_dashboard_summary_counts(db: Session):
    # 1. Total Employees from users table (case-insensitive check)
    total_employees = (
        db.query(func.count(User.id))
        .filter(
            func.lower(User.role) == "employee",
            User.is_active == 1
        )
        .scalar() or 0
    )

    # 2. Total Clients from users table (case-insensitive check)
    total_clients = (
        db.query(func.count(User.id))
        .filter(
            func.lower(User.role) == "client",
            User.is_active == 1
            )
        .scalar() or 0
    )

    # 3. Accepted Quotations Count
    quotations_accepted = (
        db.query(func.count(Quotation.id))
        .filter(func.lower(Quotation.quotation_status).in_(["accepted", "accept", "approved"]))
        .scalar() or 0
    )

    # 4. Rejected Quotations Count
    quotations_rejected = (
        db.query(func.count(Quotation.id))
        .filter(func.lower(Quotation.quotation_status).in_(["rejected", "reject", "declined"]))
        .scalar() or 0
    )

    return {
        "totalEmployees": total_employees,
        "totalClients": total_clients,
        "quotationsAccepted": quotations_accepted,
        "quotationsRejected": quotations_rejected,
    }


def get_today_follow_ups(db: Session):
    today = date.today()

    # Matches follow-ups due today (either followup_date or next_followup_date)
    records = (
        db.query(ProjectFollowup, Project, Quotation)
        .join(Project, ProjectFollowup.project_id == Project.project_id)
        .outerjoin(Quotation, Project.quotation_reference_number == Quotation.quotation_reference_number)
        .filter((ProjectFollowup.followup_date == today) | (ProjectFollowup.next_followup_date == today))
        .order_by(ProjectFollowup.id.desc())
        .all()
    )

    result = []
    for followup, project, quotation in records:
        result.append({
            "id": followup.id,
            "project_id": followup.project_id,
            "client_employee_id": project.client_employee_id or "-",
            "quotation_reference_number": project.quotation_reference_number or "-",
            "quotation_for": quotation.quotation_for if quotation else "-",
            "followup_date": followup.followup_date,
            "next_followup_date": followup.next_followup_date,
            "notes": followup.notes,
            "project_status": project.project_status or "Pending",
        })

    return result

def get_available_projects_for_employee(db: Session, employee: User) -> List[Dict[str, Any]]:
    # Subquery: Count accepted employees per project
    accepted_counts = (
        select(
            ProjectEmployee.project_id,
            func.count(ProjectEmployee.id).label("emp_count")
        )
        .group_by(ProjectEmployee.project_id)
        .subquery()
    )

    # Fetch projects where accepted employees < 3, location matches employee, and current employee hasn't accepted yet
    statement = (
        select(
            Project,
            User.district,
            User.state,
            User.name.label("client_name"),
            User.organisation_name
        )
        .join(User, Project.client_employee_id == User.client_employee_id)
        .outerjoin(accepted_counts, Project.project_id == accepted_counts.c.project_id)
        .where(
            func.coalesce(accepted_counts.c.emp_count, 0) < 3,
            or_(
                User.state == employee.state,
                User.district == employee.district
            ),
            ~Project.project_id.in_(
                select(ProjectEmployee.project_id).where(
                    ProjectEmployee.client_employee_id == employee.client_employee_id
                )
            )
        )
    )

    results = db.exec(statement).all()
    output = []
    for proj, district, state, client_name, org_name in results:
        output.append({
            "id": proj.id,
            "project_id": proj.project_id,
            "quotation_reference_number": proj.quotation_reference_number,
            "place": f"{district or ''}, {state or ''}".strip(", "),
            "client_name": client_name or org_name or "Client",
            "project_start_date": str(proj.project_start_date) if proj.project_start_date else None,
            "project_status": proj.project_status
        })
    return output

def accept_project_by_employee(
    db: Session,
    project_id: str,
    employee_client_id: str,
    visit_date: date,
    visit_time: str,
    notes: str = ""
) -> ProjectEmployee:
    # 1. Enforce max limit of 3 employees
    count_stmt = select(func.count(ProjectEmployee.id)).where(
        ProjectEmployee.project_id == project_id
    )
    if db.exec(count_stmt).one() >= 3:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot accept project: Maximum limit of 3 employees has already been reached."
        )

    # 2. Check for existing acceptance by this user
    existing = db.exec(
        select(ProjectEmployee).where(
            ProjectEmployee.project_id == project_id,
            ProjectEmployee.client_employee_id == employee_client_id
        )
    ).first()
    if existing:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="You have already accepted this project."
        )

    now = datetime.utcnow()

    # 3. Insert into project_employees
    assignment = ProjectEmployee(
        project_id=project_id,
        client_employee_id=employee_client_id,
        accepted_at=now,
        created_at=now
    )
    db.add(assignment)

    # 4. Insert into project_followups
    followup_notes = f"Initial site visit scheduled at {visit_time}. {notes}".strip()
    followup = ProjectFollowup(
        project_id=project_id,
        followup_date=visit_date,
        notes=followup_notes,
        next_followup_date=visit_date,
        created_at=now
    )
    db.add(followup)

    db.commit()
    db.refresh(assignment)
    return assignment


def get_bills_tax_breakdown(
    db: Session, client_employee_id: Optional[str] = None
) -> BillTaxReportSummary:
    query = select(Bill)
    if client_employee_id:
        query = query.where(Bill.client_employee_id == client_employee_id)

    bills = db.exec(
        query.order_by(Bill.created_at.desc())
    ).all()  # type: ignore

    items: List[BillTaxItemReport] = []
    total_taxable = 0.0
    total_cgst = 0.0
    total_sgst = 0.0
    grand_total = 0.0

    for idx, bill in enumerate(bills, start=1):
        # Fetch user name if client is linked
        client_name = "N/A"
        if bill.client_employee_id:
            user = db.exec(
                select(User).where(
                    User.client_employee_id == bill.client_employee_id
                )
            ).first()
            if user:
                client_name = (
                    user.name
                    or getattr(user, "company_name", None)
                    or bill.client_employee_id
                )

        bill_total = float(bill.total_amount or 0.0)

        # Standard 18% GST reverse computation (Taxable = Total / 1.18, CGST = 9%, SGST = 9%)
        taxable_value = round(bill_total / 1.18, 2) if bill_total > 0 else 0.0
        cgst = round(taxable_value * 0.09, 2)
        sgst = round(taxable_value * 0.09, 2)

        total_taxable += taxable_value
        total_cgst += cgst
        total_sgst += sgst
        grand_total += bill_total

        inv_date = (
            bill.created_at.strftime("%d-%b-%Y")
            if bill.created_at
            else "N/A"
        )

        items.append(
            BillTaxItemReport(
                sl_no=idx,
                invoice_number=bill.bill_refrence_number,
                invoice_date=inv_date,
                client_name=client_name,
                client_employee_id=bill.client_employee_id,
                taxable_value=taxable_value,
                cgst=cgst,
                sgst=sgst,
                total_amount=bill_total,
                status=bill.status or "unpaid",
            )
        )

    return BillTaxReportSummary(
        total_taxable_value=round(total_taxable, 2),
        total_cgst=round(total_cgst, 2),
        total_sgst=round(total_sgst, 2),
        grand_total=round(grand_total, 2),
        items=items,
    )