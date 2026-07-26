from __future__ import annotations
from ast import List
from typing import Optional, Union
from decimal import Decimal
import uuid
from datetime import datetime, timezone

from pydantic import EmailStr
from sqlalchemy import DateTime
from sqlmodel import Field, Relationship, SQLModel
from sqlalchemy import Column, Numeric, Text
from sqlalchemy.orm import relationship

def get_datetime_utc() -> datetime:
    return datetime.now(timezone.utc)


# Shared properties
class UserBase(SQLModel):
    name: str | None = Field(default=None, max_length=255)
    email: EmailStr = Field(unique=True, index=True, max_length=255)
    phone: str | None = Field(default=None, max_length=12)
    role: str | None = Field(default=None, max_length=255)
    address: str | None = Field(default=None, max_length=255)
    last_seen_at: datetime | None = Field(default=None)
    created_at: datetime | None = Field(default=None)
    referral_code: str | None = Field(default=None, max_length=255)
    terms_and_condition:bool
    is_active: bool = True
    profile_avatar: str | None = Field(default=None, max_length=255)
    client_employee_id: str | None = Field(default=None, unique=True, index=True, max_length=20)
    pincode: str | None = Field(default=None, max_length=10)
    district: str | None = Field(default=None, max_length=255)
    state: str | None = Field(default=None, max_length=255)


# Properties to receive via API on creation
class UserCreate(UserBase):
    password: str = Field(min_length=8, max_length=128)


class UserRegister(SQLModel):
    pass


# Properties to receive via API on update, all are optional
class UserUpdate(UserBase):
    email: EmailStr | None = Field(default=None, max_length=255)  # type: ignore
    password: str | None = Field(default=None, min_length=8, max_length=128)


class UserUpdateMe(SQLModel):
    name: str | None = Field(default=None, max_length=255)
    email: EmailStr | None = Field(default=None, max_length=255)


class UpdatePassword(SQLModel):
    current_password: str = Field(min_length=8, max_length=128)
    new_password: str = Field(min_length=8, max_length=128)


# Database model, database table inferred from class name
class User(UserBase, table=True):
    __tablename__: str = "users"
    id: int | None = Field(default=None, primary_key=True)
    password: str
    created_at: datetime | None = Field(
        default_factory=get_datetime_utc,
        sa_type=DateTime(timezone=True),  # type: ignore
    )


# Properties to return via API, id is always required
class UserPublic(UserBase):
    id: uuid.UUID
    created_at: datetime | None = None


class UsersPublic(SQLModel):
    data: list[UserPublic]
    count: int


# Generic message
class Message(SQLModel):
    message: str


# JSON payload containing access token
class Token(SQLModel):
    access_token: str
    token_type: str = "bearer"


# Contents of JWT token
class TokenPayload(SQLModel):
    sub: str | None = None


class NewPassword(SQLModel):
    token: str
    new_password: str = Field(min_length=8, max_length=128)



# ========================== PRODUCT MODELS ==========================

class Product(SQLModel, table=True):
    __tablename__: str = "products"

    id: int | None = Field(default=None, primary_key=True)
    name: str
    price: float


# ========================== QUOTATIONS MODELS ==========================

# 1. Parent Table: Quotations
class Quotation(SQLModel, table=True):
    __tablename__ = "quotations"

    id: Optional[int] = Field(default=None, primary_key=True)
    quotation_reference_number: str = Field(unique=True, index=True, max_length=100)
    url_call: str = Field(index=True)
    client_employee_id: Optional[str] = None
    additional_offer: Optional[str] = None
    total_amount: Optional[float] = 0.0
    quotation_date: str = None

    # Relationship linked to QuotationProduct
    products: List["QuotationProduct"] = Relationship(
        sa_relationship=relationship("QuotationProduct", back_populates="quotation", cascade="all, delete-orphan")
    )


# 2. Child Table: Quotation Products
class QuotationProduct(SQLModel, table=True):
    __tablename__ = "quotation_products"

    id: Optional[int] = Field(default=None, primary_key=True)
    
    # 👈 Explicit Foreign Key referencing quotation_reference_number
    quotation_reference_number: str = Field(foreign_key="quotations.quotation_reference_number")
    
    product_name: str
    quantity: int
    price: float
    gst: float
    total: float

    quotation: Optional[Quotation] = Relationship(
        sa_relationship=relationship("Quotation", back_populates="products")
    )

class QuotationProductRead(SQLModel):
    id: Optional[int] = None
    product_name: str
    quantity: int
    price: Decimal
    gst: Decimal
    total: Decimal

class QuotationReadWithProducts(SQLModel):
    id: Optional[int] = None
    quotation_reference_number: str
    client_employee_id: Optional[Union[str, int]] = None  # 👈 Allows both 'CLI0002' and 123
    additional_offer: Optional[str] = None
    created_at: Optional[Union[datetime, str]] = None
    total_amount: Optional[Decimal] = Decimal("0.00")
    quotation_date: Optional[Union[datetime, str]] = None  # 👈 Allows '26/07/2026' string
    url_call: str
    products: list[QuotationProductRead] = []


# 3. Input Request Schemas
class QuotationItemCreate(SQLModel):
    itemDescription: str
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
    items: list[QuotationItemCreate]
    grandTotal: Optional[Decimal] = None
    url_call:Optional[str] = None