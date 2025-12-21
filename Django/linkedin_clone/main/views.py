from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .models import Listing


def index(request):
    return render(request, 'index.html')


def register(request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        password = request.POST.get('password')
        confirm = request.POST.get('confirm')

        if not name or not email or not password or not confirm:
            messages.error(request, "All fields are required")
            return redirect('/')

        if password != confirm:
            messages.error(request, "Passwords do not match")
            return redirect('/')

        if User.objects.filter(username=email).exists():
            messages.error(request, "User already exists")
            return redirect('/')

        user = User.objects.create_user(
            username=email,
            email=email,
            password=password,
            first_name=name
        )
        login(request, user)
        return redirect('/listings')


def login_user(request):
    if request.method == "POST":
        email = request.POST.get('email')
        password = request.POST.get('password')

        if not email or not password:
            messages.error(request, "All fields are required")
            return redirect('/')

        user = authenticate(username=email, password=password)

        if user is None:
            messages.error(request, "Invalid credentials")
            return redirect('/')

        login(request, user)
        return redirect('/listings')


def logout_user(request):
    logout(request)
    return redirect('/')


@login_required
def listings(request):
    return render(request, 'listings.html', {
        'listings': Listing.objects.all()
    })


@login_required
def view_listing(request, id):
    return render(request, 'view_listing.html', {
        'listing': Listing.objects.get(id=id)
    })


@login_required
def new_listing(request):
    if request.method == "POST":
        title = request.POST.get('title')
        description = request.POST.get('description')
        price = request.POST.get('price')

        if not title or not description or not price:
            messages.error(request, "All fields are required")
            return redirect('/listings/new')

        try:
            price = float(price)
        except:
            messages.error(request, "Price must be a number")
            return redirect('/listings/new')

        Listing.objects.create(
            title=title,
            description=description,
            price=price,
            owner=request.user
        )
        return redirect('/listings')

    return render(request, 'new_listing.html')
