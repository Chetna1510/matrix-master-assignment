from django.urls import path
from . import views

urlpatterns = [
    # /gener/
    path('', views.index, name="index"),

    # /gener/1 /gener_id is the variable where id will be stored
    path('<int:gener_id>', views.details, name="details")
]
