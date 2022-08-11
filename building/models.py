# from django.db import models
from .buildings import buildings

# Create your models here.


class Building:
  id: int 
  nameE: str
  nameC: str 
  img: str
  placeUri: str
  uri: str
  address: str 
  longitude: float 
  latitude: float
  description: str
  visited: bool


def translate(lis):
  pass


def get_buildings():
  res = []

  for idx, i in enumerate(buildings):
    build = Building()
    build.id = idx
    build.nameE = i['nameE']
    build.nameC = i['nameS']
    build.img = i['firstImg']
    build.placeUri = i['placeUri']
    build.uri = i['uri']
    build.address = i['address']
    build.longitude = i['long']
    build.latitude = i['lat']
    build.description = i['des']
    build.visited = False
    res.append(build)

  return res


if __name__ == "__main__":
  get_buildings()
