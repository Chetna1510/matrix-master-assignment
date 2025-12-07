from django.shortcuts import render
from django.shortcuts import redirect
from django.contrib.auth import logout
# Create your views here.


def signup_view(request):
    return render(request, 'account/signup.html')


def logout_view(request):
    logout(request)  # Ends the user session
    # Redirect to login page (or 'home' if you prefer)
    return redirect("admin")
