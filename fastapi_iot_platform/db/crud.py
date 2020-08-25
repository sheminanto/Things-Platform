from db import models
from sqlalchemy.orm import Session


def get_user_by_id(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()


def get_all_users(db: Session):
    return db.query(models.User).offset(0).limit(5).all()


def create_user(db: Session, name: str, id: int):
    user = models.User()
    user.name = name
    user.id = id

    db.add(user)
    db.commit()
