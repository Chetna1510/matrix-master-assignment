from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('register', views.register),
    path('login', views.login_user),
    path('logout', views.logout_user),

    path('listings', views.listings),
    path('listings/new', views.new_listing),
    path('listings/<int:id>', views.view_listing),
]
