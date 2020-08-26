from sqlalchemy import Column, Integer, String, ForeignKey
from db import Base


class User(Base):
    __tablename__ = "users"
    id = Column('id', Integer, primary_key=True)
    name = Column('name', String(32), unique=True)


# class Sensor(Base):
#     __tablename__ = "api_tokens"
#     sensor_id = Column('id', Integer, primary_key=True)
#     user_id = Column(
#         Integer,
#         ForeignKey('users.id', ondelete='CASCADE'),
#         nullable=False,
#         # no need to add index=True, all FKs have indexes
#     )
#     token_1 = Column('token_1', String)
