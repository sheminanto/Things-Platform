from sqlalchemy import Column, Integer, String, ForeignKey
from db import Base, SessionLocal, engine


class User(Base):
    __tablename__ = "users"
    id = Column('id', Integer, primary_key=True)
    name = Column('name', String, unique=True)


Base.metadata.create_all(bind=engine)

session = SessionLocal()
user = User()
# user.id = 1
# user.name = "shemin"
users = session.query(User).all()

for user in users:
    print(user.name)
# session.add(user)
# session.commit()
# session.close()
