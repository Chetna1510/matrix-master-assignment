from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, logout
# Create your views here.


def register_view(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            # form.save() # to save form data and return user value
            login(request, form.save())  # this will also return user value
            return redirect("posts:list")
    else:
        form = UserCreationForm()  # if it's not post method
    # return the form with validation
    return render(request, "users/register.html", {"form": form})


def login_view(request):
    if request.method == "POST":
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            # Login here
            login(request, form.get_user())
            # if URL has next
            if "next" in request.POST:
                return redirect(request.POST.get("next"))
            else:
                return redirect("posts:list")

    else:
        form = AuthenticationForm()
    return render(request, "users/login.html", {"form": form})


def logout_view(request):
    if request.method == "POST":
        logout(request)
        return redirect("posts:list")
