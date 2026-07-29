from typing import Any
from fastapi import APIRouter, HTTPException, status
from app.api.deps import SessionDep, CurrentUser  # Template dependencies
from app import crud
from app.models import ContactForm, ContactFormPublic

router = APIRouter(prefix="/contact-form", tags=["contact-form"])

@router.get("/", response_model=ContactForm)
def read_contact_form(
    session: SessionDep,
    current_user: CurrentUser,
    skip: int = 0,
    limit: int = 100,
) -> Any:
    
    contactform, count = crud.get_contact_form(session=session, skip=skip, limit=limit)
    return ContactFormPublic(data=contactform, count=count)