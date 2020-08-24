from typing import Optional
from db import models
from db import engine
from main import app

models.Base.metadata.create_all(bind=engine)


@app.get("/", tags=["hello"])
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}
