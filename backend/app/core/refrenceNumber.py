from datetime import datetime
from sqlalchemy.orm import Session
from app.models import Quotation


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