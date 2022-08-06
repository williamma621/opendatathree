from django.db import models

# Create your models here.

class Building:
  id: int 
  name: str 
  img: str
  address: str 
  visited: bool
