from datetime import datetime
from typing import Optional
from sqlmodel import Session, select
from app.models import Quotation, Bill, BillItem


def get_current_financial_year() -> str:
    """Calculates Indian Financial Year (e.g., Apr 2026 - Mar 2027 => '26-27')"""
    today = datetime.now()
    year = today.year

    if today.month >= 4:
        start_yr = str(year)[-2:]
        end_yr = str(year + 1)[-2:]
    else:
        start_yr = str(year - 1)[-2:]
        end_yr = str(year)[-2:]

    return f"{start_yr}-{end_yr}"


def generate_quotation_ref(db: Session, prefix: str = "ITS/DKL") -> str:
    
    fy_str = get_current_financial_year()
    search_pattern = f"{prefix}/{fy_str}/%"

    # Fetch the latest quotation created in the active fiscal year
    last_quotation = (
        db.query(Quotation)
        .filter(Quotation.quotation_reference_number.like(search_pattern))
        .order_by(Quotation.id.desc())
        .first()
    )

    if not last_quotation:
        next_seq = 1
    else:
        # Extract sequence from trailing part (e.g., 'ITS/DKL/26-27/001' -> '001')
        last_seq_str = last_quotation.quotation_reference_number.split("/")[-1]
        next_seq = int(last_seq_str) + 1

    formatted_seq = f"{next_seq:03d}"
    return f"{prefix}/{fy_str}/{formatted_seq}"

def generate_invoice_ref(db: Session, prefix: str = "ITS/INV") -> str:
    fy_str = get_current_financial_year()
    search_pattern = f"{prefix}/{fy_str}/%"

    # Now select(Bill) calls the SQLModel query builder, not the python socket select module!
    statement = (
        select(Bill)
        .where(Bill.bill_refrence_number.like(search_pattern))
        .order_by(Bill.id.desc())
    )
    last_bill: Optional[Bill] = db.exec(statement).first()

    if not last_bill or not last_bill.bill_refrence_number:
        next_seq = 1
    else:
        try:
            last_seq_str = last_bill.bill_refrence_number.split("/")[-1]
            next_seq = int(last_seq_str) + 1
        except (ValueError, IndexError):
            next_seq = 1

    formatted_seq = f"{next_seq:03d}"
    return f"{prefix}/{fy_str}/{formatted_seq}"