from typing import Any
from fastapi import APIRouter, HTTPException, status
from app.api.deps import SessionDep, CurrentUser  # Template dependencies
from app import crud
from app.models import ClientCreate, ClientPublic, ClientsPublic

router = APIRouter(prefix="/clients", tags=["clients"])


@router.post("/", response_model=ClientPublic, status_code=status.HTTP_201_CREATED)
def create_client(
    *,
    session: SessionDep,
    current_user: CurrentUser,
    client_in: ClientCreate,
) -> Any:
    """Create a new client."""
    client = crud.create_client(session=session, client_in=client_in)
    return client


@router.get("/", response_model=ClientsPublic)
def read_clients(
    session: SessionDep,
    current_user: CurrentUser,
    skip: int = 0,
    limit: int = 100,
) -> Any:
    """Retrieve paginated list of clients."""
    clients, count = crud.get_clients(session=session, skip=skip, limit=limit)
    return ClientsPublic(data=clients, count=count)


@router.get("/{client_id}", response_model=ClientPublic)
def read_client_by_id(
    *,
    session: SessionDep,
    current_user: CurrentUser,
    client_id: int,
) -> Any:
    """Get a specific client by ID."""
    client = crud.get_client_by_id(session=session, client_id=client_id)
    if not client:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Client not found",
        )
    return client