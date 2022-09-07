from django.shortcuts import render
from .models import *
from .buildings import buildings
# Create your views here.

"""
click_icon(): 用户点击见后会发生什么.展示info（我们还是用弹窗吗？）
	translate(): 翻译文本
	display_id(): 弹窗到一个新的界面，包括所有建筑名和ID。
"""


def index(request):
  # import data from static content(read from file), turn into classes from models
  # display the static content into html
  # longitude and lattitude
  
  return render(request, 'index.html')


def map(request):

  # return render(request, "map.html")
  return render(request, 'map.html')

def click_icon(request):

  return render(request, 'id.html', {'buildings': get_buildings()[0]})
