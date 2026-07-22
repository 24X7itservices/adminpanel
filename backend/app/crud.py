import uuid
from typing import Any

from sqlmodel import Session, select

from app.core.security import SecurityService
from app.models import User, UserCreate, UserUpdate


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
    """
    Database Worker: Queries records and performs timing-attack secure authentication.
    """
    # 1. Try fetching the user model record out of the table by email string
    # (Assuming you have a 'get_user_by_email' helper or inline query)
    db_user = session.query(User).filter(User.email == email).first()
    
    if not db_user:
        # Prevent timing attacks by running verification even when user doesn't exist
        # This ensures processing time matches whether or not the email exists
        SecurityService.verify_password(password, DUMMY_HASH)
        return None
        
    # 2. Verify plain password against the stored database hash value
    # Note: Make sure 'db_user.password' matches your exact model field name
    verified, updated_password_hash = SecurityService.verify_password(password, db_user.password)
    
    if not verified:
        return None
        
    # 3. Dynamically upgrade the password hash if algorithm settings have updated
    if updated_password_hash:
        db_user.password = updated_password_hash
        session.add(db_user)
        session.commit()
        session.refresh(db_user)
        
    return db_user
