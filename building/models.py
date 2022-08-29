from django.db import models
# from .buildings_old import buildings
import buildings_old

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

  for idx, i in enumerate(buildings_old.buildings):
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

def write_file():
  lis = get_buildings()
  with open("../templates/buildings.tsv", 'w') as f:
    for i in lis:
      i.description = i.description.replace('\n', '^')
      cur = [str(i.id), i.nameE, i.nameC, i.img, i.placeUri, i.uri, 
      i.address, str(i.longitude), str(i.latitude), i.description, str(i.visited)]
      cur = "\t".join(cur)
      f.write(cur)
      f.write("\n")

def read_file():
  with open("../templates/buildings.tsv", 'r') as f:
    lines = f.readlines()
    
    for i in lines:
      print(i)
      print("________________________ new line here_________________")
    print(len(lines), "is the length")


if __name__ == "__main__":
  read_file()
