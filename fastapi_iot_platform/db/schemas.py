from typing import List, Optional
from pydantic import BaseModel


class UserList(BaseModel):
    id: int
    name: str

    class Config:
        orm_mode = True
