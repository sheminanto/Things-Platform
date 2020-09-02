from db import models, engine, crud, SessionLocal, schemas
from fastapi import Depends
from sqlalchemy.orm import Session
from typing import List
from fastapi import FastAPI
import time


app = FastAPI()

models.Base.metadata.create_all(bind=engine)


def get_db():
    start = time.time()
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
        stop = time.time()
        print(f"time taken : {stop - start}")

# @app.on_event("startup")
# def connect_db():
#     db = SessionLocal()


# @app.on_event("shutdown")
# def close_db():
#     db.close()


@app.get("/", tags=["hello"])
def read_root():
    return {"Hello": "World"}


@app.get("/users", response_model=List[schemas.UserList])
def test(db: Session = Depends(get_db)):
    return crud.get_all_users(db)


@app.get("/insert")
def create_user(name: str, _id: int, db: Session = Depends(get_db)):
    crud.create_user(name=name, _id=_id, db=db)
    return {'username': name, 'id': _id}


@app.post("/api")
def sensor_api(token: str, data: schemas.ApiInsert, _id: str, db: Session = Depends(get_db)):
    if crud.authenticate(db, token, data.token, _id):
        result = "Authentication success!"
    else:
        result = "Authentication failed"
    return result


@app.get("/{username}/{sensor_id}")
def read_item(username: str, sensor_id: str, token):
    return {"username": username, "sensor_id": sensor_id, "token_1": token}
