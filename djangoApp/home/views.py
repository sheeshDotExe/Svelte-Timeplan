from django.shortcuts import render, redirect
from django.contrib.auth.models import User
import os
import json

# Create your views here.python
def index(request):
    return render(request, "dist/index.html", None)


def register(request):
    if request.POST:
        data = request.POST
        try:
            print(data["uname"], data["email"], data["psw"])
            username = data["uname"]
            email = data["email"]
            password = data["psw"]
            user = None
            if not User.objects.filter(username=username).exists():
                User.objects.create_user(username, email, password)
                return redirect("/accounts/login")

            return render(request, "registration/usernametaken.html", None)
        except Exception as e:
            print(e)
    return render(request, "registration/register.html", None)


def page_not_found_view(request, exception):
    return render(request, "dist/404.html")
