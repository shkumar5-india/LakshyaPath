from pydantic import BaseModel
from typing import Optional, List

class UserInput(BaseModel):
    name: Optional[str] = None
    age: Optional[int] = None
    education: str
    interests: List[str]
    location: Optional[str] = None
    preferred_language: Optional[str] = "en"
