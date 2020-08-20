
from typing import Optional
from fastapi import FastAPI
import models
from sqlalchemy.orm import Session
from database import SessionLocal, engine


app = FastAPI()
models.Base.metadata.create_all(bind=engine)


@app.get("/", tags=["hello"])
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}
