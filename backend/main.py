from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Mount the static directory so files can be accessed via URL
app.mount("/quotations", StaticFiles(directory="quotations"), name="quotations")