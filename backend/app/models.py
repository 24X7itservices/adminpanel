from datetime import date, datetime, timezone
from decimal import Decimal
from typing import List, Optional, Union
import uuid
from pydantic import BaseModel, ConfigDict
from pydantic import EmailStr
from sqlmodel import Field, Relationship, SQLModel
from sqlalchemy import DateTime, UniqueConstraint
from pydantic import field_validator


def get_datetime_utc() -> datetime:
    return datetime.now(timezone.utc)


# ==========================================
# 1. USER MODELS
# ==========================================
class UserBase(SQLModel):
    name: Optional[str] = Field(default=None, max_length=255)
    email: EmailStr = Field(unique=True, index=True, max_length=255)
    phone: Optional[str] = Field(default=None, max_length=12)
    organisation_name: Optional[str] = Field(default=None, max_length=255)
    role: Optional[str] = Field(default=None, max_length=255)
    address: Optional[str] = Field(default=None, max_length=255)
    last_seen_at: Optional[datetime] = Field(default=None)
    created_at: Optional[datetime] = Field(default=None)
    referral_code: Optional[str] = Field(default=None, max_length=255)
    terms_and_condition: bool
    is_active: bool = True
    profile_avatar: Optional[str] = Field(default=None, max_length=255)
    client_employee_id: Optional[str] = Field(
        default=None, unique=True, index=True, max_length=255
    )
    pincode: Optional[str] = Field(default=None, max_length=10)
    district: Optional[str] = Field(default=None, max_length=255)
    state: Optional[str] = Field(default=None, max_length=255)


class UserCreate(UserBase):
    password: str = Field(min_length=8, max_length=128)


class UserRegister(SQLModel):
    pass


class UserUpdate(UserBase):
    email: Optional[EmailStr] = Field(default=None, max_length=255)  # type: ignore
    password: Optional[str] = Field(default=None, min_length=8, max_length=128)


class UserUpdateMe(SQLModel):
    name: Optional[str] = Field(default=None, max_length=255)
    email: Optional[EmailStr] = Field(default=None, max_length=255)


class UpdatePassword(SQLModel):
    current_password: str = Field(min_length=8, max_length=128)
    new_password: str = Field(min_length=8, max_length=128)


class User(UserBase, table=True):
    __tablename__: str = "users"

    id: Optional[int] = Field(default=None, primary_key=True)
    password: str
    created_at: Optional[datetime] = Field(
        default_factory=get_datetime_utc,
        sa_type=DateTime(timezone=True),
    )

    managed_projects: List[Project] = Relationship(
        sa_relationship_kwargs={
            "primaryjoin": "User.client_employee_id == Project.client_employee_id"
        },
        back_populates="client_employee",
    )
    assigned_projects: List["ProjectEmployee"] = Relationship(
        back_populates="client_employee",
        sa_relationship_kwargs={"overlaps": "project_employees"},
    )
    projects: List["Project"] = Relationship(
        back_populates="client_employee",
        sa_relationship_kwargs={"overlaps": "managed_projects"},
    )

    project_employees: List[ProjectEmployee] = Relationship(
        sa_relationship_kwargs={
            "primaryjoin": "User.client_employee_id == ProjectEmployee.client_employee_id"
        },
        back_populates="client_employee",
    )

    employee_data: Optional[EmployeeData] = Relationship(
        sa_relationship_kwargs={
            "primaryjoin": "User.client_employee_id == EmployeeData.client_employee_id",
            "uselist": False,
        },
        back_populates="user",
    )
    

class UserWithEmployeeDataPublic(UserBase):
    id: int
    created_at: Optional[datetime] = None
    employee_data: Optional[EmployeeDataPublic] = None

class UserPublic(UserBase):
    id: int
    created_at: Optional[datetime] = None


class UsersPublic(SQLModel):
    data: List[UserPublic]
    count: int


class Message(SQLModel):
    message: str


class Token(SQLModel):
    access_token: str
    token_type: str = "bearer"


class TokenPayload(SQLModel):
    sub: Optional[str] = None


class NewPassword(SQLModel):
    token: str
    new_password: str = Field(min_length=8, max_length=128)


# ==========================================
# 2. PRODUCT MODELS
# ==========================================
class Product(SQLModel, table=True):
    __tablename__: str = "products"

    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    price: float


# ==========================================
# 3. QUOTATION MODELS
# ==========================================
class Quotation(SQLModel, table=True):
    __tablename__ = "quotations"

    id: Optional[int] = Field(default=None, primary_key=True)
    quotation_reference_number: str = Field(unique=True, index=True, max_length=100)
    url_call: str = Field(index=True)
    client_employee_id: Optional[str] = None
    additional_offer: Optional[str] = None
    total_amount: Optional[float] = 0.0
    quotation_date: Optional[str] = None
    quotation_for: Optional[str] = None
    quotation_status: str

    # Relationships
    products: List["QuotationProduct"] = Relationship(
        back_populates="quotation",
        sa_relationship_kwargs={"cascade": "all, delete-orphan"},
    )
    projects: List["Project"] = Relationship(back_populates="quotation")


class QuotationProduct(SQLModel, table=True):
    __tablename__ = "quotation_products"

    id: Optional[int] = Field(default=None, primary_key=True)
    quotation_reference_number: str = Field(
        foreign_key="quotations.quotation_reference_number"
    )

    product_name: str
    quantity: int
    unit: str
    price: float
    gst: float
    total: float

    quotation: Optional[Quotation] = Relationship(back_populates="products")


class QuotationProductRead(SQLModel):
    id: Optional[int] = None
    product_name: str
    quantity: int
    unit: str
    price: Decimal
    gst: Decimal
    total: Decimal


class QuotationReadWithProducts(SQLModel):
    id: Optional[int] = None
    quotation_reference_number: str
    client_employee_id: Optional[Union[str, int]] = None
    additional_offer: Optional[str] = None
    created_at: Optional[Union[datetime, str]] = None
    total_amount: Optional[Decimal] = Decimal("0.00")
    quotation_date: Optional[Union[datetime, str]] = None
    url_call: str
    quotation_for: str
    quotation_status: str
    products: List[QuotationProductRead] = Field(default_factory=list)


class QuotationItemCreate(SQLModel):
    itemDescription: str
    unit: str
    qty: int
    rate: Decimal
    gst: Decimal
    total: Decimal


class QuotationCreateRequest(SQLModel):
    refNo: str
    date: str
    clientName: Optional[str] = None
    clientAddress: Optional[str] = None
    additional_emi_option: Optional[str] = None
    client_employee_id: Optional[int] = None
    items: List[QuotationItemCreate]
    grandTotal: Optional[Decimal] = None
    url_call: Optional[str] = None
    quotation_for: Optional[str] = None
    quotation_status: str

class QuotationStatusUpdate(BaseModel):
    quotation_status: str


# ==========================================
# 4. CONTACT & QUOTATION REQUEST MODELS
# ==========================================
class ContactForm(SQLModel, table=True):
    __tablename__ = "contact_forms"

    id: Optional[int] = Field(default=None, primary_key=True)
    customer_id: Optional[int] = Field(
        default=None, foreign_key="users.id", nullable=True
    )
    subject: str = Field(max_length=255, nullable=False)
    message: str = Field(nullable=False)
    status: Optional[str] = Field(default="pending", max_length=50)
    submitted_at: Optional[datetime] = Field(
        default_factory=get_datetime_utc, nullable=True
    )
    name: Optional[str] = Field(default=None, max_length=255)
    email: Optional[str] = Field(default=None, max_length=255)


class ContactFormPublic(SQLModel):
    id: int
    created_at: Optional[datetime] = None


class QuotationRequest(SQLModel, table=True):
    __tablename__ = "quotation_requests"

    id: Optional[int] = Field(default=None, primary_key=True)
    customer_id: Optional[int] = Field(
        default=None, foreign_key="users.id", nullable=True
    )
    full_name: str = Field(max_length=255, nullable=False)
    email: str = Field(max_length=255, nullable=False)
    phone: str = Field(max_length=50, nullable=False)
    service_type: Optional[str] = Field(default="Residential", max_length=100)
    installation_address: str = Field(nullable=False)
    description: str = Field(nullable=False)
    status: Optional[str] = Field(default="pending", max_length=50)
    assigned_admin_id: Optional[int] = Field(
        default=None, foreign_key="users.id", nullable=True
    )
    created_at: Optional[datetime] = Field(
        default_factory=get_datetime_utc, nullable=True
    )


class QuotationRequestPublic(SQLModel):
    id: int
    created_at: Optional[datetime] = None


class QuotationEmailRequest(SQLModel):
    client_email: EmailStr
    client_name: str
    ref_no: str
    grand_total: float
    download_link: str


class TempCredentialsEmailRequest(SQLModel):
    client_email: EmailStr
    client_name: str
    temp_password: str
    login_link: str


# ==========================================
# 5. PROJECT EMPLOYEES (Junction Table)
# ==========================================
class ProjectEmployeeBase(SQLModel):
    # ✅ FIX: Changed project_id type to str and foreign_key to projects.project_id
    project_id: str = Field(
        foreign_key="projects.project_id", 
        ondelete="CASCADE", 
        nullable=False,
        max_length=100
    )
    client_employee_id: str = Field(
        foreign_key="users.client_employee_id", 
        ondelete="CASCADE", 
        # nullable=False,
        # max_length=100
    )
    accepted_at: Optional[datetime] = None


class ProjectEmployee(ProjectEmployeeBase, table=True):
    __tablename__ = "project_employees"
    __table_args__ = (
        UniqueConstraint("project_id", "client_employee_id", name="uq_project_employee"),
    )

    id: Optional[int] = Field(default=None, primary_key=True)
    created_at: Optional[datetime] = Field(
        default_factory=get_datetime_utc, nullable=True
    )

    client_employee: Optional["User"] = Relationship(
        sa_relationship_kwargs={
            "primaryjoin": "ProjectEmployee.client_employee_id == User.client_employee_id"
        },
        back_populates="project_employees",
    )

    project: Optional[Project] = Relationship(
        sa_relationship_kwargs={
            "primaryjoin": "ProjectEmployee.project_id == Project.project_id"
        },
        back_populates="project_employees",
    )


class ProjectEmployeeCreate(ProjectEmployeeBase):
    pass


class ProjectEmployeePublic(ProjectEmployeeBase):
    id: int
    created_at: Optional[datetime] = None


class ProjectEmployeeDetailPublic(SQLModel):
    id: int
    project_id: str  # ✅ FIX: Changed type to str
    client_employee_id: str
    accepted_at: Optional[datetime] = None
    created_at: Optional[datetime] = None
    employee_details: Optional[UserPublicMinimal] = None


# ==========================================
# 6. PROJECT EXPENSES
# ==========================================

class ProjectExpenseBase(SQLModel):
    expense_type: str = Field(max_length=100, nullable=False)
    expense_value: Decimal = Field(
        default=Decimal("0.00"), max_digits=10, decimal_places=2, nullable=False
    )
    expense_proof: Optional[str] = Field(default=None, max_length=255)
    expense_description: str = Field(max_length=255)
    expense_date: Optional[datetime] = Field(
        default_factory=get_datetime_utc, nullable=False
    )


class ProjectExpense(ProjectExpenseBase, table=True):
    __tablename__ = "project_expenses"

    id: Optional[int] = Field(default=None, primary_key=True)
    
    # ✅ FIX: Changed to str and foreign_key="projects.project_id"
    project_id: str = Field(
        foreign_key="projects.project_id", ondelete="CASCADE", nullable=False, max_length=100
    )

    project: Optional[Project] = Relationship(back_populates="expenses")


class ProjectExpenseCreate(ProjectExpenseBase):
    project_id: str  # ✅ Changed to str


class ProjectExpensePublic(ProjectExpenseBase):
    id: int
    project_id: str  # ✅ Changed to str

# ==========================================
# 7. PROJECT IMAGES
# ==========================================

class ProjectImageBase(SQLModel):
    image_path: str = Field(max_length=255, nullable=False)
    is_thumbnail: bool = Field(default=False, nullable=False)


class ProjectImage(ProjectImageBase, table=True):
    __tablename__ = "project_images"

    id: Optional[int] = Field(default=None, primary_key=True)
    
    # ✅ FIX: Changed to str and foreign_key="projects.project_id"
    project_id: str = Field(
        foreign_key="projects.project_id", ondelete="CASCADE", nullable=False, max_length=100
    )
    uploaded_at: Optional[datetime] = Field(
        default_factory=get_datetime_utc, nullable=False
    )

    project: Optional[Project] = Relationship(back_populates="images")


class ProjectImageCreate(ProjectImageBase):
    project_id: str  # ✅ Changed to str


class ProjectImageCreate(SQLModel):
    project_id: str
    image_path: str
    is_thumbnail: Optional[bool] = False


class ProjectImagePublic(ProjectImageBase):
    id: int
    project_id: str  # ✅ Changed to str
    uploaded_at: datetime

# ==========================================
# 8. MAIN PROJECTS TABLE
# ==========================================

class ProjectBase(SQLModel):
    # project_id: str = Field(max_length=100, unique=True, index=True, nullable=False)

    project_id: Optional[str] = Field(default=None, max_length=255, unique=True)
    client_employee_id: Optional[str] = Field(
        default=None, foreign_key="users.client_employee_id", max_length=255
    )
    
    # ✅ Fixed: Refers to users.client_employee_id
    client_employee_id: Optional[str] = Field(
        default=None, 
        foreign_key="users.client_employee_id", 
        ondelete="SET NULL", 
        nullable=True
    )
    quotation_reference_number: Optional[str] = Field(
        default=None,
        foreign_key="quotations.quotation_reference_number",
        ondelete="SET NULL",
        max_length=100,
        nullable=True,
    )
    project_start_date: Optional[date] = None
    project_end_date: Optional[date] = None
    project_status: str = Field(default="Pending", max_length=50)
    @field_validator("project_start_date", "project_end_date", mode="before")
    @classmethod
    def parse_flexible_date(cls, value):
        if isinstance(value, str) and value.strip():
            value_str = value.strip()
            # Try parsing common date formats
            for fmt in ("%d/%m/%Y", "%d-%m-%Y", "%Y-%m-%d"):
                try:
                    return datetime.strptime(value_str, fmt).date()
                except ValueError:
                    continue
            raise ValueError(
                f"Invalid date format '{value}'. Expected DD/MM/YYYY, DD-MM-YYYY, or YYYY-MM-DD."
            )
        return value


class Project(ProjectBase, table=True):
    __tablename__ = "projects"

    id: Optional[int] = Field(default=None, primary_key=True)
    created_at: Optional[datetime] = Field(
        default_factory=get_datetime_utc, nullable=True
    )

    # Relationships
    # client_employee: Optional[User] = Relationship(back_populates="managed_projects")
    quotation: Optional[Quotation] = Relationship(back_populates="projects")

    client_employee: Optional["User"] = Relationship(
        sa_relationship_kwargs={
            "primaryjoin": "Project.client_employee_id == User.client_employee_id"
        },
        back_populates="managed_projects",
    )

    project_employees: List[ProjectEmployee] = Relationship(back_populates="project")
    
    # ✅ Clean SQLModel cascade syntax
    expenses: List[ProjectExpense] = Relationship(
        back_populates="project",
        cascade_delete=True
    )
    images: List[ProjectImage] = Relationship(
        back_populates="project",
        cascade_delete=True
    )


class ProjectCreate(ProjectBase):
    pass


class ProjectUpdate(SQLModel):
    project_id: Optional[str] = None
    client_employee_id: Optional[str] = None
    quotation_reference_number: Optional[str] = None
    project_start_date: Optional[date] = None
    project_end_date: Optional[date] = None
    project_status: Optional[str] = None


class ProjectPublic(ProjectBase):
    id: int
    created_at: Optional[datetime] = None


class ProjectPublicWithDetails(ProjectPublic):
    expenses: List[ProjectExpensePublic] = Field(default_factory=list)
    images: List[ProjectImagePublic] = Field(default_factory=list)
    project_employees: List[ProjectEmployeePublic] = Field(default_factory=list)

class UserPublicMinimal(SQLModel):
    id: Optional[int] = None
    name: Optional[str] = None
    email: str
    phone: Optional[str] = None
    role: Optional[str] = None
    client_employee_id: Optional[str] = None
    organisation_name: Optional[str] = None


class ProjectEmployeeDetailPublic(SQLModel):
    id: int
    client_employee_id: str
    accepted_at: Optional[datetime] = None
    created_at: Optional[datetime] = None
    employee_details: Optional[UserPublicMinimal] = None  # Nested user info


class ProjectFullDetailsPublic(ProjectPublic):
    # Embedded Relations
    client_employee: Optional[UserPublicMinimal] = None
    quotation: Optional[QuotationReadWithProducts] = None
    expenses: List[ProjectExpensePublic] = Field(default_factory=list)
    images: List[ProjectImagePublic] = Field(default_factory=list)
    project_employees: List[ProjectEmployeeDetailPublic] = Field(default_factory=list)


# ==========================================
# EMPLOYEE DATA MODELS
# ==========================================

class EmployeeDataBase(SQLModel):
    client_employee_id: str = Field(
        foreign_key="users.client_employee_id",
        ondelete="CASCADE",
        nullable=False,
        max_length=255,
    )
    aadhar_file_url: Optional[str] = Field(default=None, max_length=255)
    pancard_file_url: Optional[str] = Field(default=None, max_length=255)
    dl_file_url: Optional[str] = Field(default=None, max_length=255)
    bank_name: Optional[str] = Field(default=None, max_length=150)
    account_name: Optional[str] = Field(default=None, max_length=150)
    ifsc_code: Optional[str] = Field(default=None, max_length=20)
    account_number: Optional[str] = Field(default=None, max_length=50)

class EmployeeData(EmployeeDataBase, table=True):
    __tablename__: str = "employee_data"

    id: Optional[int] = Field(default=None, primary_key=True)
    created_at: Optional[datetime] = Field(default_factory=datetime.utcnow)
    updated_at: Optional[datetime] = Field(default_factory=datetime.utcnow)

    # Foreign Key Relationship back to User
    user: Optional["User"] = Relationship(
        sa_relationship_kwargs={
            "primaryjoin": "EmployeeData.client_employee_id == User.client_employee_id"
        },
        back_populates="employee_data",
    )

class EmployeeDataPublic(EmployeeDataBase):
    id: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

class EmployeeDataCreate(EmployeeDataBase):
    pass

class FullEmployeeCreate(SQLModel):
    user_info: UserCreate
    employee_details: EmployeeDataCreate

# ==========================================
# BILL ITEM MODEL
# ==========================================

class BillItemBase(SQLModel):
    # Configure Pydantic to allow both field name and camelCase alias
    model_config = ConfigDict(populate_by_name=True, from_attributes=True)

    bill_refrence_number: str = Field(
        foreign_key="bills.bill_refrence_number",
        ondelete="CASCADE",
        max_length=255,
    )
    name: str = Field(max_length=255)
    hsn: str = Field(max_length=50)
    quantity: int = Field(default=0, ge=0)
    unit: str = Field(max_length=50)
    price_per_unit: float = Field(default=0.0, ge=0.0, alias="pricePerUnit")


class BillItem(BillItemBase, table=True):
    __tablename__: str = "bill_items"

    id: Optional[int] = Field(default=None, primary_key=True)
    created_at: Optional[datetime] = Field(default_factory=datetime.utcnow)

    bill: Optional["Bill"] = Relationship(
        sa_relationship_kwargs={
            "primaryjoin": "foreign(BillItem.bill_refrence_number) == Bill.bill_refrence_number"
        },
        back_populates="items",
    )


class BillItemPublic(BillItemBase):
    id: int
    created_at: Optional[datetime] = None


# ==========================================
# 2. BILL MODEL
# ==========================================

class BillBase(SQLModel):
    bill_refrence_number: str = Field(max_length=255, unique=True, index=True)
    quotation_reference_number: Optional[str] = Field(
        default=None, foreign_key="quotations.quotation_reference_number", max_length=100
    )
    client_employee_id: Optional[str] = Field(
        default=None, foreign_key="users.client_employee_id", max_length=255
    )
    total_amount: float = Field(default=0.0)
    status: Optional[str] = Field(default="unpaid", max_length=50)
    url_call: str = Field(max_length=255)
    place_of_supply: str= Field(max_length=255)


class Bill(SQLModel, table=True):
    __tablename__: str = "bills"

    id: Optional[int] = Field(default=None, primary_key=True)
    bill_refrence_number: str = Field(max_length=255, unique=True, index=True)
    quotation_reference_number: Optional[str] = Field(default=None, max_length=100)
    client_employee_id: Optional[str] = Field(default=None, max_length=255)
    total_amount: float = Field(default=0.0)
    status: Optional[str] = Field(default="unpaid", max_length=50)
    created_at: Optional[datetime] = Field(default_factory=datetime.utcnow)
    url_call: str = Field(max_length=100, unique=True, index=True)
    place_of_supply: str = Field(max_length=100, unique=True, index=True)

    # Note lazy="selectin" forces eager loading of items on every query
    items: List[BillItem] = Relationship(
        sa_relationship_kwargs={
            "primaryjoin": "Bill.bill_refrence_number == foreign(BillItem.bill_refrence_number)",
            "lazy": "selectin"
        },
        back_populates="bill",
    )


class BillWithItemsPublic(BillBase):
    id: int
    created_at: Optional[datetime] = None
    items: List[BillItemPublic] = []