from typing import Optional
from db import models, engine, crud, SessionLocal, schemas
from fastapi import Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import List

from main import app

models.Base.metadata.create_all(bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# @app.on_event("startup")
# def connect_db():
#     db = SessionLocal()


# @app.on_event("shutdown")
# def close_db():
#     db.close()


@app.get("/", tags=["hello"])
def read_root():
    return {"Hello": "World"}


@app.get("/allusers", response_model=List[schemas.UserList])
def test(db: Session = Depends(get_db)):
    return crud.get_all_users(db)


@app.get("/insert")
def createUser(name: str, id: int, db: Session = Depends(get_db)):
    crud.create_user(name=name, id=id, db=db)
    return {'username': name, 'id': id}


@app.get("/{username}/{sensor_id}")
def read_item(username: str, sensor_id: str, token):
    return {"username": username, "sensor_id": sensor_id, "token_1": token}
