from typing import Any
from fastapi import APIRouter, HTTPException, status
from app.api.deps import SessionDep, CurrentUser  # Template dependencies
from app import crud
from app.models import QuotationRequest, QuotationRequestPublic

router = APIRouter(prefix="/quotation-request", tags=["quotation-request"])

@router.get("/", response_model=QuotationRequest)
def read_contact_form(
    session: SessionDep,
    current_user: CurrentUser,
    skip: int = 0,
    limit: int = 100,
) -> Any:
    
    contactform, count = crud.get_quotation_request(session=session, skip=skip, limit=limit)
    return QuotationRequestPublic(data=contactform, count=count)