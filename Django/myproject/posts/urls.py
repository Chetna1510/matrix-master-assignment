from django.urls import path
from . import views

app_name = 'posts'

urlpatterns = [
    # this is looking for the specific post list directory template
    # name refers to the layout.html file
    path('', views.posts_list, name='list'),
    path('new-post/', views.post_new, name='new-post'),
    path('<slug:slug>', views.post_page, name='page'),

]
