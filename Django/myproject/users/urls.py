from django.urls import path
from . import views

app_name = 'users'  # app name

urlpatterns = [
    # this is looking for the specific post list directory template
    # name refers to the layout.html file
    path('register/', views.register_view, name='register'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),

]
