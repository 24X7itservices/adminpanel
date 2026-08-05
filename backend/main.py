from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Mount the static directory so files can be accessed via URL
app.mount("/quotations", StaticFiles(directory="quotations"), name="quotations")
app.mount("/uploads/expense_proofs", StaticFiles(directory="uploads/expense_proofs"), name="uploads/expense_proofs")
app.mount("/uploads/site_media", StaticFiles(directory="uploads/site_media"), name="uploads/site_media")