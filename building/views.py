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
  #import data from static content(read from file), turn into classes from models
  #display the static content into html
  #longitude and lattitude

  return render(request, 'index.html', {'buildings': get_buildings()})
  # return render(request, 'home.html', {'name': 'Jason'})

def click_icon(request):
  # 弹窗还是新界面？
  res = get_buildings()
  

def click_translate(request):
  res = translate()
  #should we use the API or translate the text before hand and write into file?
  return render(request, 'index.html', {'buildings': res})

def click_display_id(request):

  # one line of code rendering a new html file with /id

  buildings.append()
  
  return render(request, 'id.html', {'buildings': buildings})
