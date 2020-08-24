from typing import Optional
from db import models, engine

from main import app

models.Base.metadata.create_all(bind=engine)


@app.get("/", tags=["hello"])
def read_root():
    return {"Hello": "World"}


@app.get("/{username}/{sensor_id}")
def read_item(username: str, sensor_id: str, token):
    return {"username": username, "sensor_id": sensor_id, "token_1": token}
