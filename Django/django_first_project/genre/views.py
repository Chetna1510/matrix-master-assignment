from django.shortcuts import render
from django.http import HttpResponse
from . models import Collection, piece
# Create your views here.


def index(request):
    all_collection = Collection.objects.all()
    context = {
        "all_collection": all_collection
    }
    return HttpResponse("<h1>Hello World</h1>")


def details(request, gener_id):
    # we can't concetanate int with string so we first convert it to string
    return HttpResponse("<h1>The collection gener id is: " + str(gener_id) + "</h1>")
