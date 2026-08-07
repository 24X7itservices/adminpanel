import re
from typing import Any, Optional, Tuple, List, Dict
from sqlmodel import Session, func, select
from sqlalchemy.orm import selectinload, joinedload
from app.core.security import SecurityService
from app.models import User, UserCreate, UserUpdate
from app.models import Quotation, QuotationProduct, QuotationCreateRequest
from app.models import ContactForm, QuotationRequest,QuotationRequestPublic
from app.models import (
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

)
from datetime import date
from sqlmodel import Session, select, or_
from sqlalchemy.orm import selectinload
from app.models import Project, ProjectEmployee
from fastapi import HTTPException, status
from app.models import User, QuotationRequest

def create_user(*, session: Session, user_create: UserCreate) -> User:
    db_obj = User.model_validate(
        user_create, update={"password": SecurityService.get_password_hash(user_create.password)}
    )
    session.add(db_obj)
    session.commit()
    session.refresh(db_obj)
    return db_obj

def get_user_by_email_and_role(session: Session, email: str, role: str):
    return session.exec(
        select(User).where(
            User.email == email,
            User.role == role
        )
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

def get_user_by_client_employee_id(session: Session, client_employee_id: str) -> Optional[User]:
    statement = select(User).where(User.client_employee_id == client_employee_id)
    return session.exec(statement).first()

def update_user_by_client_employee_id(
    session: Session, 
    client_employee_id: str, 
    user_update: UpdateUser
) -> User:
    # 1. Check if user exists
    user = get_user_by_client_employee_id(session, client_employee_id)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"User with client_employee_id '{client_employee_id}' not found."
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
        quotation_for = quotation_in.quotation_for,
        quotation_status = "Pending"
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

def update_quotation_status(
    *, 
    session: Session, 
    ref_no: str, 
    new_status: str
) -> Optional[Quotation]:
    # Support both raw reference number and URL formatted reference number
    formatted_ref = ref_no.replace("_", "/")
    
    statement = select(Quotation).where(
        (Quotation.url_call == ref_no) | 
        (Quotation.quotation_reference_number == formatted_ref)
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
    session: Session, 
    status: str, 
    skip: int = 0, 
    limit: int = 100
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
        .options(selectinload(Quotation.products)) # eager-load products
    )
    return session.exec(statement).all()

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
    statement = statement.offset(skip).limit(limit).where(QuotationRequest.status == "pending")
    return session.exec(statement).all()

def get_quotation_request_by_id(session: Session, request_id: int) -> Optional[QuotationRequest]:
    statement = select(QuotationRequest).where(QuotationRequest.id == request_id)
    return session.exec(statement).first()

def update_quotation_status_and_admin(
    session: Session, 
    quote_id: int, 
    update_data: QuotationRequestStatusUpdate
) -> QuotationRequest:
    quote = session.get(QuotationRequest, quote_id)
    if not quote:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Quotation request with ID {quote_id} not found."
        )

    # Only update status
    if update_data.status is not None:
        quote.status = update_data.status

    session.add(quote)
    session.commit()
    session.refresh(quote)
    return quote

# --- DELETE ---
def delete_quotation_request(
    session: Session, 
    quote_id: int
) -> bool:
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

def get_project_full_details(
    db: Session, project_id: str
) -> Optional[Project]:
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
def get_all_projects(
    db: Session, skip: int = 0, limit: int = 100
) -> List[Project]:
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

def get_project_by_str_id(
    db: Session, project_id: str
) -> Optional[Project]:
    statement = select(Project).where(
        Project.project_id == project_id
    )
    return db.exec(statement).first()

def get_projects(
    db: Session, skip: int = 0, limit: int = 100
) -> List[Project]:
    statement = select(Project).offset(skip).limit(limit)
    return db.exec(statement).all()

def create_project(
    db: Session, project_create: ProjectCreate
) -> Project:
    # Convert incoming schema to dictionary and pass as kwargs
    project_data = project_create.model_dump(exclude_unset=True)
    db_project = Project(**project_data)
    
    if not db_project.project_status:
        db_project.project_status = "Pending"

    db.add(db_project)
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

def get_project_by_str_id(
    session: Session, project_id: str
) -> Optional[Project]:
    statement = select(Project).where(
        Project.project_id == project_id
    )
    return session.exec(statement).first()

def get_project_by_str_id(
    session: Session, project_id: str
) -> Optional[Project]:
    statement = select(Project).where(
        Project.project_id == project_id
    )
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
        db_project.project_end_date = (
            status_data.project_end_date or date.today()
        )

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

    numbers = re.findall(r'\d+', last_project.project_id)
    if numbers:
        last_number = int(numbers[-1])
        next_number = last_number + 1
    else:
        next_number = 1

    return f"{prefix}-{next_number:04d}"

def get_project_full_details_by_id(session: Session, project_identifier: str) -> Optional[Project]:

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
            selectinload(Project.project_employees).selectinload(ProjectEmployee.client_employee)
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
    urlcall = bill_ref_no.replace('/', '_')

    # 1. Instantiate Parent Bill
    new_bill = Bill(
        bill_refrence_number=bill_ref_no,
        quotation_reference_number=bill_data.get("quotation_reference_number"),
        client_employee_id=bill_data.get("client_employee_id"),
        total_amount=bill_data.get("total_amount", 0.0),
        status=bill_data.get("status", "unpaid"),
        url_call=urlcall,
        place_of_supply=bill_data.get("place_of_supply", "")
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


def get_all_bills(
    session: Session, skip: int = 0, limit: int = 100
) -> List[Bill]:
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
            selectinload(Bill.projects).selectinload(Project.payments)
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

        return {
            "employee_data": db_employee_data
        }

    except Exception as e:
        db.rollback()
        raise e


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
            selectinload(Bill.projects).selectinload(Project.payments)
        )
    )
    return db.exec(statement).first()