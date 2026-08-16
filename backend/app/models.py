from datetime import date, datetime, timezone
from decimal import Decimal
from typing import List, Optional, Union
import uuid
from pydantic import BaseModel, ConfigDict
from pydantic import EmailStr
from sqlmodel import Field, Relationship, SQLModel
from sqlalchemy import (
    DateTime,
    UniqueConstraint,
    Column,
    Integer,
    String,
    Numeric,
    Enum as SQLEnum,
    ForeignKey,
    func,
    Text,
    Date,
    Boolean,
)
from sqlalchemy.orm import declarative_base
from pydantic import field_validator
from enum import Enum

Base = declarative_base()

def get_datetime_utc() -> datetime:
    return datetime.now(timezone.utc)

# ==========================================
# USER MODELS
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
    gstin: Optional[str] = Field(default=None, max_length=255)

class UserCreate(UserBase):
    password: str = Field(min_length=8, max_length=128)

class UserRegister(SQLModel):
    pass

class UserUpdate(UserBase):
    email: Optional[EmailStr] = Field(default=None, max_length=255)  # type: ignore
    password: Optional[str] = Field(default=None, min_length=8, max_length=128)

class UpdateUser(BaseModel):
    name: Optional[str] = None
    email: Optional[EmailStr] = None
    phone: Optional[str] = None
    district: Optional[str] = None
    state: Optional[str] = None
    pincode: Optional[str] = None
    address: Optional[str] = None
    organisation_name: Optional[str] = None
    is_active: Optional[bool] = None
    gstin: Optional[str] = None

class UserUpdateMe(SQLModel):
    name: Optional[str] = Field(default=None, max_length=255)
    email: Optional[EmailStr] = Field(default=None, max_length=255)

class UserUpdate(SQLModel):
    name: Optional[str] = None
    email: Optional[str] = None
    phone: Optional[str] = None
    address: Optional[str] = None
    pincode: Optional[str] = None
    district: Optional[str] = None
    state: Optional[str] = None
    organisation_name: Optional[str] = None
    gstin: Optional[str] = None
    profile_avatar: Optional[str] = None

class UserStatusUpdate(BaseModel):
    is_active: bool

class EmployeeDataUpdate(SQLModel):
    bank_name: Optional[str] = None
    account_name: Optional[str] = None
    ifsc_code: Optional[str] = None
    account_number: Optional[str] = None
    aadhar_file_url: Optional[str] = None
    pancard_file_url: Optional[str] = None
    dl_file_url: Optional[str] = None
    designation: Optional[str] = None

class UpdatePassword(SQLModel):
    current_password: str = Field(min_length=8, max_length=128)
    new_password: str = Field(min_length=8, max_length=128)

class UserRead(UserBase):
    id: int

class User(UserBase, table=True):
    __tablename__: str = "users"

    id: Optional[int] = Field(default=None, primary_key=True)
    password: str
    email: str = Field(index=True)
    role: str = Field(max_length=50)
    gstin: Optional[str] = Field(default=None, max_length=255)
    profile_avatar: Optional[str] = Field(default=None)
    created_at: Optional[datetime] = Field(
        default_factory=get_datetime_utc,
        sa_type=DateTime(timezone=True),
    )

    managed_projects: List["Project"] = Relationship(
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

    project_employees: List["ProjectEmployee"] = Relationship(
        sa_relationship_kwargs={
            "primaryjoin": "User.client_employee_id == ProjectEmployee.client_employee_id"
        },
        back_populates="client_employee",
    )

    employee_data: Optional["EmployeeData"] = Relationship(
        sa_relationship_kwargs={
            "primaryjoin": "User.client_employee_id == EmployeeData.client_employee_id",
            "uselist": False,
        },
        back_populates="user",
    )

class UserWithEmployeeDataPublic(UserBase):
    id: int
    created_at: Optional[datetime] = None
    employee_data: Optional["EmployeeDataPublic"] = None
    profile_avatar: Optional[str] = None

class UserPublic(UserBase):
    id: int
    created_at: Optional[datetime] = None
    profile_avatar: Optional[str] = None

class UsersPublic(SQLModel):
    data: List[UserPublic]
    count: int
    profile_avatar: Optional[str] = None

class UserPublicMinimal(SQLModel):
    id: Optional[int] = None
    name: Optional[str] = None
    email: str
    phone: Optional[str] = None
    role: Optional[str] = None
    client_employee_id: Optional[str] = None
    organisation_name: Optional[str] = None
    gstin: Optional[str] = None

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
# PRODUCT MODELS
# ==========================================

class Product(SQLModel, table=True):
    __tablename__: str = "products"

    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    price: float

# ==========================================
# QUOTATION MODELS
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
    created_at: Optional[datetime] = Field(default=None)

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

class QuotationRead(BaseModel):
    id: int
    quotation_reference_number: str
    client_employee_id: Optional[str] = None
    additional_offer: Optional[str] = None
    total_amount: Optional[Union[float, str]] = None
    quotation_date: Optional[date] = None
    quotation_for: Optional[str] = None
    quotation_status: Optional[str] = "Pending"
    url_call: Optional[str] = None
    created_at: Optional[datetime] = None

    model_config = ConfigDict(from_attributes=True)

# ==========================================
# CONTACT & QUOTATION REQUEST MODELS
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

class QuotationStatus(str, Enum):
    PENDING = "pending"
    VIEWED = "viewed"
    CANCELLED = "cancelled"

class QuotationRequest(SQLModel, table=True):
    __tablename__ = "quotation_requests"

    id: Optional[int] = Field(default=None, primary_key=True)
    full_name: str = Field(max_length=255, nullable=False)
    email: str = Field(max_length=255, nullable=False)
    phone: str = Field(max_length=50, nullable=False)
    service_type: Optional[str] = Field(default="Residential", max_length=100)
    installation_address: str = Field(nullable=False)
    description: str = Field(nullable=False)
    status: Optional[str] = Field(default="pending", max_length=50)
    created_at: Optional[datetime] = Field(
        default_factory=get_datetime_utc, nullable=True
    )

class QuotationRequestStatusUpdate(BaseModel):
    status: Optional[str] = "viewed"
    assigned_admin_id: Optional[int] = None

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
    email: EmailStr
    name: str
    temp_password: str
    login_link: str

# ==========================================
# PROJECT EMPLOYEES
# ==========================================

class ProjectEmployeeBase(SQLModel):
    project_id: str = Field(
        foreign_key="projects.project_id",
        ondelete="CASCADE",
        nullable=False,
        max_length=100,
    )
    client_employee_id: str = Field(
        foreign_key="users.client_employee_id",
        ondelete="CASCADE",
        nullable=False,
    )
    accepted_at: Optional[datetime] = None

class ProjectEmployee(ProjectEmployeeBase, table=True):
    __tablename__ = "project_employees"
    __table_args__ = (
        UniqueConstraint(
            "project_id", "client_employee_id", name="uq_project_employee"
        ),
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
    project: Optional["Project"] = Relationship(
        sa_relationship_kwargs={
            "primaryjoin": "ProjectEmployee.project_id == Project.project_id"
        },
        back_populates="project_employees",
    )

    @property
    def employee_details(self) -> Optional["User"]:
        return self.client_employee

class ProjectEmployeeCreate(ProjectEmployeeBase):
    pass

class ProjectEmployeePublic(ProjectEmployeeBase):
    id: int
    created_at: Optional[datetime] = None

class ProjectEmployeeDetailPublic(SQLModel):
    id: int
    project_id: str
    client_employee_id: str
    accepted_at: Optional[datetime] = None
    created_at: Optional[datetime] = None
    client_employee: Optional[UserPublicMinimal] = (
        None  # Renamed from employee_details to match DB relationship
    )
    employee_details: Optional[UserPublicMinimal] = Field(
        default=None, validation_alias="client_employee"
    )

class ProjectDetailRead(BaseModel):
    id: int
    project_id: Optional[str] = None
    client_employee_id: Optional[str] = None
    quotation_reference_number: Optional[str] = None
    project_start_date: Optional[date] = None
    project_end_date: Optional[date] = None
    project_status: str
    roundup: Optional[float] = None
    created_at: Optional[datetime] = None
    quotation: Optional[QuotationRead] = None
    bills: List[BillRead] = []
    payments: List[ProjectPaymentRead] = []
    total_billed: float = 0.00
    total_paid: float = 0.00
    pending_payment: float = 0.00

# ==========================================
# PROJECT EXPENSES
# ==========================================

class ProjectExpenseBase(SQLModel):
    expense_type: str = Field(max_length=100, nullable=False)
    expense_value: Decimal = Field(
        default=Decimal("0.00"),
        max_digits=10,
        decimal_places=2,
        nullable=False,
    )
    expense_proof: Optional[str] = Field(default=None, max_length=255)
    expense_description: str = Field(max_length=255)
    expense_date: Optional[datetime] = Field(
        default_factory=get_datetime_utc, nullable=False
    )

class ProjectExpense(ProjectExpenseBase, table=True):
    __tablename__ = "project_expenses"

    id: Optional[int] = Field(default=None, primary_key=True)
    project_id: str = Field(
        foreign_key="projects.project_id",
        ondelete="CASCADE",
        nullable=False,
        max_length=100,
    )
    project: Optional["Project"] = Relationship(back_populates="expenses")

class ProjectExpenseCreate(ProjectExpenseBase):
    project_id: str

class ProjectExpensePublic(ProjectExpenseBase):
    id: int
    project_id: str

# ==========================================
# PROJECT IMAGES
# ==========================================

class ProjectImageBase(SQLModel):
    image_path: str = Field(max_length=255, nullable=False)
    is_thumbnail: bool = Field(default=False, nullable=False)

class ProjectImage(ProjectImageBase, table=True):
    __tablename__ = "project_images"

    id: Optional[int] = Field(default=None, primary_key=True)
    project_id: str = Field(
        foreign_key="projects.project_id",
        ondelete="CASCADE",
        nullable=False,
        max_length=100,
    )
    uploaded_at: Optional[datetime] = Field(
        default_factory=get_datetime_utc, nullable=False
    )
    project: Optional["Project"] = Relationship(back_populates="images")

class ProjectImageCreate(ProjectImageBase):
    project_id: str

class ProjectImagePublic(ProjectImageBase):
    id: int
    project_id: str
    uploaded_at: datetime

# ==========================================
# PROJECT DOCUMENTS, PAYMENTS & FOLLOWUPS
# ==========================================

class ProjectDocumentBase(SQLModel):
    project_id: str = Field(
        foreign_key="projects.project_id",
        ondelete="CASCADE",
        nullable=False,
        max_length=255,
    )
    document_text: Optional[str] = Field(default=None)
    document_url: str = Field(nullable=False, max_length=2083)
    created_at: Optional[datetime] = None

class ProjectDocument(ProjectDocumentBase, table=True):
    __tablename__ = "project_documents"
    id: Optional[int] = Field(default=None, primary_key=True)
    project_id: str = Field(
        foreign_key="projects.project_id", ondelete="CASCADE", nullable=False
    )
    created_at: Optional[datetime] = Field(
        default_factory=get_datetime_utc, nullable=True
    )
    project: Optional["Project"] = Relationship(back_populates="documents")

class ProjectDocumentPublic(ProjectDocumentBase):
    id: int
    project_id: str

class ProjectDocumentCreate(ProjectDocumentBase):
    pass

class ProjectPaymentBase(SQLModel):
    project_id: str = Field(
        foreign_key="projects.project_id",
        ondelete="CASCADE",
        nullable=False,
        max_length=100,
    )
    amount: Decimal = Field(default=Decimal("0.00"), max_digits=10, decimal_places=2)
    # Made optional
    transaction_id: Optional[str] = Field(default=None, max_length=100, nullable=True)
    transaction_type: str = Field(max_length=50)
    transaction_proof: Optional[str] = Field(default=None, max_length=255)
    description: Optional[str] = Field(default=None, max_length=255)

class ProjectPayment(ProjectPaymentBase, table=True):
    __tablename__ = "project_payments"
    id: Optional[int] = Field(default=None, primary_key=True)
    project_id: str = Field(
        foreign_key="projects.project_id", ondelete="CASCADE", nullable=False
    )
    project: Optional["Project"] = Relationship(back_populates="payments")
    transaction_date: Optional[datetime] = datetime.utcnow().strftime(
        "%Y-%m-%d %H:%M:%S"
    )

    amount: Decimal
    transaction_id: Optional[str] = Field(default=None, unique=True)
    transaction_proof: Optional[str] = None
    transaction_type: str
    created_at: Optional[datetime] = Field(default=None)
    payment_status: str = Field(default="Paid")
    description: Optional[str] = None

class ProjectPaymentPublic(ProjectPaymentBase):
    id: int
    project_id: str
    amount: float
    transaction_id: Optional[str] = None
    transaction_proof: Optional[str] = None
    transaction_type: str
    transaction_date: datetime
    payment_status: str
    description: Optional[str] = None

class ProjectPaymentCreate(ProjectPaymentBase):
    pass

class ProjectFollowupBase(SQLModel):
    followup_date: date
    notes: str
    next_followup_date: Optional[date] = None

class ProjectFollowup(ProjectFollowupBase, table=True):
    __tablename__ = "project_followups"
    id: Optional[int] = Field(default=None, primary_key=True)
    project_id: str = Field(
        foreign_key="projects.project_id", ondelete="CASCADE", nullable=False
    )
    created_at: Optional[datetime] = Field(default_factory=get_datetime_utc)
    project: Optional["Project"] = Relationship(back_populates="followups")

class ProjectFollowupPublic(ProjectFollowupBase):
    id: int
    project_id: str
    created_at: Optional[datetime] = None

class ProjectFollowupCreate(ProjectFollowupBase):
    project_id: str

# ==========================================
# MAIN PROJECTS TABLE & SCHEMAS
# ==========================================

class ProjectBase(SQLModel):
    project_id: Optional[str] = Field(
        default=None, max_length=255, unique=True, index=True
    )
    client_employee_id: Optional[str] = Field(
        default=None,
        foreign_key="users.client_employee_id",
        ondelete="SET NULL",
        nullable=True,
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
    roundup: Optional[float] = None

    @field_validator("project_start_date", "project_end_date", mode="before")
    @classmethod
    def parse_flexible_date(cls, value):
        if isinstance(value, str) and value.strip():
            value_str = value.strip()
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
    project_id: Optional[str] = Field(default=None, unique=True, index=True)
    client_employee_id: Optional[str] = Field(
        default=None, foreign_key="users.client_employee_id"
    )
    quotation_reference_number: Optional[str] = Field(
        default=None, foreign_key="quotations.quotation_reference_number"
    )
    project_start_date: Optional[date] = None
    project_end_date: Optional[date] = None
    project_status: str = Field(default="Pending")
    created_at: Optional[datetime] = Field(default=None)
    roundup: Optional[float] = None
    created_at: Optional[datetime] = Field(
        default_factory=get_datetime_utc, nullable=True
    )

    client_employee: Optional["User"] = Relationship(
        sa_relationship_kwargs={
            "primaryjoin": "Project.client_employee_id == User.client_employee_id"
        },
        back_populates="managed_projects",
    )
    quotation: Optional["Quotation"] = Relationship(back_populates="projects")

    project_employees: List[ProjectEmployee] = Relationship(
        back_populates="project",
        sa_relationship_kwargs={"cascade": "all, delete-orphan"},
    )
    expenses: List[ProjectExpense] = Relationship(
        back_populates="project",
        sa_relationship_kwargs={"cascade": "all, delete-orphan"},
    )
    images: List[ProjectImage] = Relationship(
        back_populates="project",
        sa_relationship_kwargs={"cascade": "all, delete-orphan"},
    )
    documents: List[ProjectDocument] = Relationship(
        back_populates="project",
        sa_relationship_kwargs={"cascade": "all, delete-orphan"},
    )
    # payments: List[ProjectPayment] = Relationship(
    #     back_populates="project",
    #     sa_relationship_kwargs={"cascade": "all, delete-orphan"},
    # )
    followups: List[ProjectFollowup] = Relationship(
        back_populates="project",
        sa_relationship_kwargs={"cascade": "all, delete-orphan"},
    )
    # bills: List["Bill"] = Relationship(
    #     sa_relationship_kwargs={
    #         "primaryjoin": "Project.quotation_reference_number == Bill.quotation_reference_number",
    #         "viewonly": True,
    #         "overlaps": "quotation,projects",
    #     }
    # )
    # Relationships
    payments: List["ProjectPayment"] = Relationship(
        back_populates="project",
        sa_relationship_kwargs={"cascade": "all, delete-orphan"},
    )

    # Wrap foreign() around Bill.quotation_reference_number
    bills: List["Bill"] = Relationship(
        sa_relationship_kwargs={
            "primaryjoin": "Project.quotation_reference_number == foreign(Bill.quotation_reference_number)",
            "viewonly": True,
            "overlaps": "quotation,projects",
        }
    )

class ProjectResponseWrapper(BaseModel):
    success: int
    message: str
    data: ProjectPublic

class ProjectCreate(ProjectBase):
    roundup: Optional[float] = None

class ProjectUpdate(SQLModel):
    project_id: Optional[str] = None
    client_employee_id: Optional[str] = None
    quotation_reference_number: Optional[str] = None
    project_start_date: Optional[date] = None
    project_end_date: Optional[date] = None
    project_status: Optional[str] = None
    roundup: Optional[float] = None

class ProjectPublic(ProjectBase):
    id: int
    project_id: str
    client_employee_id: Optional[str] = None
    quotation_reference_number: Optional[str] = None
    project_start_date: Optional[date] = None
    project_end_date: Optional[date] = None
    project_status: str
    roundup: Optional[float] = None
    created_at: Optional[datetime] = None

    # Add payments list here
    payments: List[ProjectPaymentPublic] = []

    model_config = ConfigDict(from_attributes=True)

class ProjectPublicWithDetails(ProjectPublic):
    expenses: List[ProjectExpensePublic] = Field(default_factory=list)
    images: List[ProjectImagePublic] = Field(default_factory=list)
    project_employees: List[ProjectEmployeePublic] = Field(default_factory=list)

class ProjectFullDetailsPublic(ProjectPublic):
    client_employee: Optional[UserPublicMinimal] = None
    quotation: Optional[QuotationReadWithProducts] = None
    expenses: List[ProjectExpensePublic] = Field(default_factory=list)
    images: List[ProjectImagePublic] = Field(default_factory=list)
    documents: List[ProjectDocumentPublic] = Field(default_factory=list)
    payments: List[ProjectPaymentPublic] = Field(default_factory=list)
    followups: List[ProjectFollowupPublic] = Field(default_factory=list)
    project_employees: List[ProjectEmployeeDetailPublic] = Field(default_factory=list)

class ProjectRoundupUpdate(SQLModel):
    roundup: float = Field(
        ...,
        description="Updated numeric roundup value for the project",
    )

class ProjectStatusUpdate(SQLModel):
    project_status: str = Field(
        ...,
        max_length=50,
        description="New status for the project (e.g., Completed, In Progress, On Hold)",
    )
    project_end_date: Optional[date] = Field(
        default=None,
        description="Optional completion date. Defaults to today's date if project_status is 'Completed'",
    )

    @field_validator("project_end_date", mode="before")
    @classmethod
    def parse_flexible_date(cls, value):
        if isinstance(value, str) and value.strip():
            value_str = value.strip()
            for fmt in ("%Y-%m-%d", "%d/%m/%Y", "%d-%m-%Y"):
                try:
                    return datetime.strptime(value_str, fmt).date()
                except ValueError:
                    continue
            raise ValueError(
                f"Invalid date format '{value}'. Expected YYYY-MM-DD, DD/MM/YYYY, or DD-MM-YYYY."
            )
        return value

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
    designation: Optional[str] = Field(default=None, max_length=50)

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
# EMPLOYEE PAYMENT FULL DATA MODELS
# ==========================================

class EmployeePaymentRead(BaseModel):
    id: int
    project_id: str
    amount: Decimal
    payment_status: str
    payment_date: Optional[datetime] = None
    payment_source: Optional[str] = None
    transaction_id: Optional[str] = None

    class Config:
        from_attributes = True

class ProjectPaymentRead(BaseModel):
    id: int
    amount: float
    payment_status: str
    transaction_date: Optional[datetime] = None
    payment_date: Optional[datetime] = None

    class Config:
        from_attributes = True

class ProjectRead(BaseModel):
    project_id: Optional[str] = None
    project_start_date: Optional[date] = None
    project_end_date: Optional[date] = None
    project_status: str
    payments: List[ProjectPaymentRead] = []

    class Config:
        from_attributes = True

class EmployeeDataRead(BaseModel):
    bank_name: Optional[str] = None
    account_name: Optional[str] = None
    ifsc_code: Optional[str] = None
    account_number: Optional[str] = None
    aadhar_file_url: Optional[str] = None
    pancard_file_url: Optional[str] = None
    dl_file_url: Optional[str] = None
    designation: Optional[str] = None

    class Config:
        from_attributes = True

class EmployeeFullDetailResponse(BaseModel):
    client_employee_id: str
    name: Optional[str] = None
    email: EmailStr
    phone: Optional[str] = None
    role: Optional[str] = None
    organisation_name: Optional[str] = None
    address: Optional[str] = None
    district: Optional[str] = None
    state: Optional[str] = None
    pincode: Optional[str] = None

    employee_data: Optional[EmployeeDataRead] = None
    managed_projects: List[ProjectRead] = []
    received_payments: List[EmployeePaymentRead] = []
    profile_avatar: Optional[str] = None

    class Config:
        from_attributes = True

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
    bill_refrence_number: str = Field(foreign_key="bills.bill_refrence_number")
    name: str
    hsn: str
    quantity: int = Field(default=0)
    unit: str
    price_per_unit: Decimal = Field(default=Decimal("0.00"))
    bill: Optional["Bill"] = Relationship(
        sa_relationship_kwargs={
            "primaryjoin": "foreign(BillItem.bill_refrence_number) == Bill.bill_refrence_number"
        },
        back_populates="items",
    )

class BillItemPublic(BaseModel):
    id: int
    bill_refrence_number: str
    name: str
    hsn: str
    quantity: int
    unit: str
    price_per_unit: float
    created_at: Optional[datetime] = None

class ClientDetailsPublic(BaseModel):
    id: int
    client_employee_id: str
    name: str
    email: str
    phone: str
    role: str
    is_active: bool
    district: Optional[str] = None
    state: Optional[str] = None
    address: Optional[str] = None
    pincode: Optional[str] = None
    created_at: Optional[datetime] = None
    organisation_name: Optional[str] = None
    gstin: Optional[str] = None

# ==========================================
# BILL MODEL
# ==========================================

class BillFullResponse(BaseModel):
    id: int
    bill_refrence_number: str
    quotation_reference_number: Optional[str] = None
    client_employee_id: Optional[str] = None
    total_amount: float
    status: str
    created_at: Optional[datetime] = None
    url_call: Optional[str] = None
    place_of_supply: Optional[str] = None
    discount: float

    items: List[BillItemPublic] = []
    # Maps 'client' relationship from DB model to 'clientDetails' in JSON response
    client_details: Optional[ClientDetailsPublic] = Field(
        default=None, alias="client", serialization_alias="clientDetails"
    )
    projects: List[ProjectPublic] = []

    # Use model_config ONLY (remove 'class Config:')
    model_config = ConfigDict(from_attributes=True, populate_by_name=True)

class BillBase(SQLModel):
    bill_refrence_number: str = Field(max_length=255, unique=True, index=True)
    quotation_reference_number: Optional[str] = Field(
        default=None,
        foreign_key="quotations.quotation_reference_number",
        max_length=100,
    )
    client_employee_id: Optional[str] = Field(
        default=None, foreign_key="users.client_employee_id", max_length=255
    )
    total_amount: float = Field(default=0.0)
    status: Optional[str] = Field(default="unpaid", max_length=50)
    url_call: str = Field(max_length=255)
    place_of_supply: str = Field(max_length=255)
    discount: float = Field(default=0.0)

class Bill(SQLModel, table=True):
    __tablename__: str = "bills"

    id: Optional[int] = Field(default=None, primary_key=True)
    bill_refrence_number: str = Field(max_length=255, unique=True, index=True)
    quotation_reference_number: Optional[str] = Field(default=None, max_length=100)
    client_employee_id: Optional[str] = Field(
        default=None, foreign_key="users.client_employee_id", max_length=255
    )
    total_amount: float = Field(default=0.0)
    status: Optional[str] = Field(default="unpaid", max_length=50)
    created_at: Optional[datetime] = Field(default_factory=datetime.utcnow)
    url_call: str = Field(max_length=100, unique=True, index=True)
    place_of_supply: str = Field(max_length=100, unique=True, index=True)
    discount: float = Field(default=0.0)

    items: List["BillItem"] = Relationship(
        back_populates="bill", sa_relationship_kwargs={"cascade": "all, delete-orphan"}
    )
    projects: List["Project"] = Relationship(
        sa_relationship_kwargs={
            "primaryjoin": "Bill.quotation_reference_number == foreign(Project.quotation_reference_number)",
            "viewonly": True,
            "overlaps": "quotation,projects,bills",
        }
    )
    client_employee_id: Optional[str] = Field(
        default=None, foreign_key="users.client_employee_id"
    )
    client: Optional["User"] = Relationship(
        sa_relationship_kwargs={
            "primaryjoin": "Bill.client_employee_id == User.client_employee_id"
        }
    )

class BillWithItemsPublic(BillBase):
    id: int
    created_at: Optional[datetime] = None
    items: List[BillItemPublic] = []

class BillStatusUpdate(SQLModel):
    status: str = Field(..., max_length=50, description="Updated status, e.g., 'paid', 'partially_paid', 'unpaid', 'cancelled'")

class BillItemRead(BaseModel):
    id: int
    bill_refrence_number: str
    name: str
    hsn: str
    quantity: int
    unit: str
    price_per_unit: float
    created_at: Optional[datetime] = None
    model_config = ConfigDict(from_attributes=True)

class BillRead(BillBase):
    id: int
    bill_refrence_number: str
    quotation_reference_number: Optional[str] = None
    client_employee_id: Optional[str] = None
    total_amount: float
    status: Optional[str] = "unpaid"
    place_of_supply: Optional[str] = None
    discount: Optional[float] = 0.0
    url_call: Optional[str] = None
    created_at: Optional[datetime] = None
    items: List[BillItemRead] = []

    model_config = ConfigDict(from_attributes=True)

# ==========================================
# PROJECT EMPLOYEE PAYMENT
# ==========================================

class PaymentStatus(str, Enum):
    PENDING = "Pending"
    COMPLETED = "Completed"
    FAILED = "Failed"
    REFUNDED = "Refunded"

class ProjectPaymentEmployee(Base):
    __tablename__ = "project_payments_employee"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    project_id = Column(
        String(255),
        ForeignKey(
            "projects.project_id",
            ondelete="CASCADE",
            onupdate="CASCADE",
            use_alter=True,
            name="fk_emp_pay_project",
        ),
        nullable=False,
        index=True,
    )
    client_employee_id = Column(
        String(255),
        ForeignKey(
            "users.client_employee_id",
            ondelete="SET NULL",
            onupdate="CASCADE",
            use_alter=True,
            name="fk_emp_pay_user",
        ),
        nullable=True,
        index=True,
    )
    amount = Column(Numeric(10, 2), nullable=False)
    payment_status = Column(
        SQLEnum(PaymentStatus, values_callable=lambda x: [e.value for e in x]),
        nullable=False,
        default=PaymentStatus.PENDING,
    )
    payment_date = Column(DateTime, server_default=func.now())
    payment_source = Column(String(100), nullable=True)
    transaction_id = Column(String(255), unique=True, nullable=True)
    created_at = Column(DateTime, server_default=func.now())

class PaymentCreate(BaseModel):
    project_id: str
    client_employee_id: Optional[str] = None
    amount: Decimal
    payment_status: PaymentStatus = PaymentStatus.PENDING
    payment_source: Optional[str] = None
    transaction_id: Optional[str] = None

class PaymentResponse(PaymentCreate):
    id: int
    payment_date: Optional[datetime] = None
    created_at: Optional[datetime] = None

    model_config = ConfigDict(from_attributes=True)

# ==========================================
# JOB POSTING
# ==========================================

class JobDataBase(SQLModel):
    job_id: str = Field(unique=True, index=True, max_length=255)
    job_type: str = Field(max_length=255)
    job_role_name: str = Field(max_length=255)
    job_location: Optional[str] = Field(default=None, max_length=255)
    job_title: str = Field(max_length=255)
    job_description: Optional[str] = Field(default=None)
    job_status: str = Field(default="Open", max_length=50)

class JobData(JobDataBase, table=True):
    __tablename__ = "jobs_data"

    id: Optional[int] = Field(default=None, primary_key=True)

class JobCreate(JobDataBase):
    pass

class JobUpdate(SQLModel):
    job_type: Optional[str] = None
    job_role_name: Optional[str] = None
    job_location: Optional[str] = None
    job_title: Optional[str] = None
    job_description: Optional[str] = None
    job_status: Optional[str] = None

class JobRead(JobDataBase):
    id: int

class JobRequest(Base):
    __tablename__ = "job_requests"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    job_id = Column(String(255), index=True, nullable=False)
    job_title = Column(String(255), nullable=True)
    username = Column(String(255), nullable=False)
    user_contact_number = Column(String(20), nullable=False)
    user_email = Column(String(255), nullable=False)
    resume_path = Column(String(255), nullable=True)
    request_status = Column(String(50), default="Pending")
    created_at = Column(DateTime, server_default=func.current_timestamp())
    updated_at = Column(
        DateTime,
        server_default=func.current_timestamp(),
        onupdate=func.current_timestamp()
    )

class JobRequestStatusUpdate(BaseModel):
    request_status: str

class JobRequestResponse(BaseModel):
    id: int
    job_id: str
    job_title: Optional[str] = None
    username: str
    user_contact_number: str
    user_email: EmailStr
    resume_path: Optional[str] = None
    request_status: str
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True

# ==========================================
# TOKEN EXTEND
# ==========================================

class TokenRefreshRequest(SQLModel):
    refresh_token: str

class TokenResponse(SQLModel):
    access_token: str
    refresh_token: str
    token_type: str = "bearer"
    expires_in: int  # Lifetime in seconds (e.g., 900 for 15 minutes)

class UserSession(SQLModel, table=True):
    __tablename__ = "user_sessions"

    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(index=True)
    refresh_token: str = Field(index=True, unique=True)
    is_active: bool = Field(default=True)

# ==========================================
# TRAINING REQUEST
# ==========================================

class Training(Base):
    __tablename__ = "trainings"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    training_id = Column(String(50), unique=True, index=True, nullable=False)
    training_title = Column(String(255), nullable=False)
    training_description = Column(Text, nullable=True)
    image = Column(String(550), nullable=True)
    instructor_name = Column(String(150), nullable=True)
    duration = Column(String(100), nullable=True)
    mode = Column(String(50), nullable=True)
    start_date = Column(Date, nullable=True)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, server_default=func.current_timestamp())
    updated_at = Column(
        DateTime,
        server_default=func.current_timestamp(),
        onupdate=func.current_timestamp()
    )

class TrainingRequest(Base):
    __tablename__ = "training_requests"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    training_id = Column(String(50), index=True, nullable=False)
    username = Column(String(255), nullable=False)
    user_contact_number = Column(String(20), nullable=False)
    user_email = Column(String(255), nullable=False)
    training_title = Column(String(255), nullable=True)
    request_status = Column(String(50), default="Pending")
    created_at = Column(DateTime, server_default=func.current_timestamp())
    updated_at = Column(
        DateTime,
        server_default=func.current_timestamp(),
        onupdate=func.current_timestamp()
    )

# ==========================================
# TRAINING
# ==========================================

class TrainingBase(BaseModel):
    training_id: str
    training_title: str
    training_description: Optional[str] = None
    image: Optional[str] = None
    instructor_name: Optional[str] = None
    duration: Optional[str] = None
    mode: Optional[str] = None
    start_date: Optional[date] = None
    is_active: Optional[bool] = True

class TrainingStatusUpdate(BaseModel):
    is_active: bool

class TrainingCreate(TrainingBase):
    pass

class TrainingUpdate(BaseModel):
    training_title: Optional[str] = None
    training_description: Optional[str] = None
    image: Optional[str] = None
    instructor_name: Optional[str] = None
    duration: Optional[str] = None
    mode: Optional[str] = None
    start_date: Optional[date] = None
    is_active: Optional[bool] = None

class TrainingResponse(TrainingBase):
    id: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class TrainingRequestCreate(BaseModel):
    training_id: str
    username: str
    user_contact_number: str
    user_email: EmailStr
    training_title: Optional[str] = None

class TrainingRequestStatusUpdate(BaseModel):
    request_status: str

class TrainingRequestResponse(BaseModel):
    id: int
    training_id: str
    username: str
    user_contact_number: str
    user_email: EmailStr
    training_title: Optional[str] = None
    request_status: str
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True

# ============================================================
# DASHBOARD DATAS
# ============================================================

class MetricCard(BaseModel):
    id: str
    title: str
    value: str
    change: str
    isPositive: bool
    sparkline: str
    badge: str

class MonthlyStat(BaseModel):
    month: str
    revenue: float
    quote: float
    heightPct: float

class ProjectHealth(BaseModel):
    name: str
    client: str
    budget: str
    spent: str
    progress: int
    status: str
    teamAvatars: List[str]

class QuickLead(BaseModel):
    id: str
    name: str
    company: str
    service: str
    amount: str
    urgency: str
    time: str

class HrStats(BaseModel):
    totalEmployees: int
    activeOnProjects: int
    benchCount: int
    openRecruitmentRoles: int
    candidatesInterviewing: int
    activeTrainingPrograms: int
    enrolledTrainees: int

class PipelineHealth(BaseModel):
    winRate: int
    avgTurnaround: str
    overdueBillsAmount: str

class ClientFinancialOverview(BaseModel):
    # Client Basic Information
    id: int
    client_employee_id: Optional[str] = None
    name: Optional[str] = None
    email: str
    phone: Optional[str] = None
    profile_avatar: Optional[str] = None
    organisation_name: Optional[str] = None
    gstin: Optional[str] = None
    address: Optional[str] = None
    district: Optional[str] = None
    state: Optional[str] = None
    pincode: Optional[str] = None
    is_active: bool
    created_at: Optional[datetime] = None

    # Overall Aggregate Financial Summary
    total_projects_count: int = 0
    overall_total_billed: float = 0.00
    overall_total_paid: float = 0.00
    overall_pending_payment: float = 0.00

    # Individual Project Breakdowns
    projects: List[ProjectDetailRead] = []
    
    # Standalone Bills not tied to any project (if any)
    unassigned_bills: List[BillRead] = []

class TrainingInvitationEmailRequest(BaseModel):
    email: EmailStr
    name: str
    subject: str
    video_call_link: str
    training_title: str
    training_id: str

# ============================================================
# STOCK
# ============================================================

class Stock(Base):
    __tablename__ = "stock"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    product_name = Column(String(255), nullable=False)
    product_quantity = Column(Integer, nullable=False, default=0)
    hsn_number = Column(String(20), nullable=True)
    amount = Column(Numeric(12, 2), nullable=False)
    bill_number = Column(String(100), nullable=True)
    bill_file_path = Column(String(2048), nullable=True)
    status = Column(String(50), nullable=False, default="AVAILABLE")
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(
        DateTime, server_default=func.now(), onupdate=func.now()
    )

class StockBase(BaseModel):
    product_name: str
    product_quantity: int = 0
    hsn_number: Optional[str] = None
    amount: Decimal
    bill_number: Optional[str] = None
    bill_file_path: Optional[str] = None
    status: Optional[str] = "AVAILABLE"

class StockCreate(StockBase):
    pass

class StockUpdate(BaseModel):
    product_name: Optional[str] = None
    product_quantity: Optional[int] = None
    hsn_number: Optional[str] = None
    amount: Optional[Decimal] = None
    bill_number: Optional[str] = None
    bill_file_path: Optional[str] = None
    status: Optional[str] = None

class StockStatusUpdate(BaseModel):
    status: str

class StockResponse(StockBase):
    id: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    model_config = ConfigDict(from_attributes=True)

# ============================================================
# ASSETS
# ============================================================

class Asset(Base):
    __tablename__ = "assets"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(255), nullable=False)
    amount = Column(Numeric(12, 2), nullable=False)
    bill_number = Column(String(100), nullable=True)
    bill_file_path = Column(String(2048), nullable=True)
    status = Column(String(50), nullable=False, default="ACTIVE")
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(
        DateTime, server_default=func.now(), onupdate=func.now()
    )

class AssetBase(BaseModel):
    name: str
    amount: Decimal
    bill_number: Optional[str] = None
    bill_file_path: Optional[str] = None
    status: Optional[str] = "ACTIVE"

class AssetCreate(AssetBase):
    pass

class AssetUpdate(BaseModel):
    name: Optional[str] = None
    amount: Optional[Decimal] = None
    bill_number: Optional[str] = None
    bill_file_path: Optional[str] = None
    status: Optional[str] = None

class AssetStatusUpdate(BaseModel):
    status: str

class AssetResponse(AssetBase):
    id: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    model_config = ConfigDict(from_attributes=True)

# ============================================================
# ASSETS
# ============================================================

class TransactionType(str, Enum):
    INCOME = "Income"
    EXPENSE = "Expense"


class PaymentMethod(str, Enum):
    BANK_TRANSFER = "Bank Transfer"
    UPI = "UPI"
    CASH = "Cash"
    CHEQUE = "Cheque"
    CARD = "Card"


# --- Bank Account ---
class BankAccountBase(SQLModel):
    account_name: str = Field(max_length=150)
    bank_name: str = Field(max_length=150)
    account_number: str = Field(unique=True, index=True, max_length=50)
    ifsc_code: str = Field(max_length=20)
    opening_balance: Decimal = Field(
        default=Decimal("0.00"), max_digits=12, decimal_places=2
    )
    current_balance: Decimal = Field(
        default=Decimal("0.00"), max_digits=12, decimal_places=2
    )
    is_active: bool = Field(default=True)


class BankAccount(BankAccountBase, table=True):
    __tablename__ = "bank_accounts"
    id: Optional[int] = Field(default=None, primary_key=True)
    created_at: Optional[datetime] = Field(default_factory=datetime.utcnow)


class BankAccountCreate(BankAccountBase):
    pass


class BankAccountRead(BankAccountBase):
    id: int
    created_at: Optional[datetime] = None


# --- General Expense (Non-Project Overhead) ---
class GeneralExpenseBase(SQLModel):
    category: str = Field(max_length=100)  # Office Rent, Utilities, Software, etc.
    amount: Decimal = Field(
        default=Decimal("0.00"), max_digits=10, decimal_places=2
    )
    payment_method: PaymentMethod = Field(default=PaymentMethod.BANK_TRANSFER)
    reference_id: Optional[str] = Field(default=None, max_length=100)
    description: Optional[str] = Field(default=None, max_length=255)
    expense_date: datetime = Field(default_factory=datetime.utcnow)


class GeneralExpense(GeneralExpenseBase, table=True):
    __tablename__ = "general_expenses"
    id: Optional[int] = Field(default=None, primary_key=True)
    created_at: Optional[datetime] = Field(default_factory=datetime.utcnow)


class GeneralExpenseCreate(GeneralExpenseBase):
    pass


class GeneralExpenseRead(GeneralExpenseBase):
    id: int
    created_at: Optional[datetime] = None

class AccountsOverviewMetrics(BaseModel):
    total_income: Decimal
    total_expenses: Decimal
    net_profit: Decimal
    pending_receivables: Decimal
    pending_payables: Decimal


class UnifiedTransactionRead(BaseModel):
    id: str
    date: Optional[datetime] = None
    title: str
    reference_id: Optional[str] = None
    party_name: Optional[str] = None
    type: str  # "Income" | "Expense"
    amount: Decimal
    status: str
    source: str  # "Client Payment" | "Project Expense" | "Employee Payout"

    model_config = ConfigDict(from_attributes=True)


class UnlockRequest(BaseModel):
    identifier: str
    password: str