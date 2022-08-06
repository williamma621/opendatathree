from django.shortcuts import render

# Create your views here.

"""
click_icon(): 用户点击见后会发生什么.展示info（我们还是用弹窗吗？）
	translate(): 翻译文本
	display_id(): 弹窗到一个新的界面，包括所有建筑名和ID。
"""

def home(request):
  #import data from static content(read from file), turn into classes from models
  #display the static content into html
  return render(request, 'home.html', {'name': 'Jason'})

def click_icon(request):
  # 弹窗还是新界面？
  pass

def click_translate(request):
  #should we use the API or translate the text before hand and write into file?
  pass

def click_display_id(request):
  # one line of code rendering a new html file with /id
  return render(request, 'id.html')
