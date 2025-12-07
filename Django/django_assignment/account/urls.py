from django.urls import path, include
from . import views

urlpatterns = [
    path('signup/', views.signup_view, name='signup'),
    path("logout/", views.logout_view, name="logout"),
]
