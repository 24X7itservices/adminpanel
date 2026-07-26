from __future__ import annotations

from fastapi import APIRouter, HTTPException, status
from app.api.deps import SessionDep
from app import crud
from app.models import QuotationCreateRequest

router = APIRouter(prefix="/admin/quotations", tags=["quotations"])


@router.post("/", status_code=status.HTTP_201_CREATED)
def create_new_quotation(*, session: SessionDep, payload: QuotationCreateRequest):
    try:
        quotation = crud.create_quotation(session=session, quotation_in=payload)
        return {
            "success": True,
            "message": "Quotation created successfully",
            "quotation_reference_number": quotation.quotation_reference_number,
        }
    except Exception as e:
        session.rollback()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Failed to create quotation: {str(e)}",
        )