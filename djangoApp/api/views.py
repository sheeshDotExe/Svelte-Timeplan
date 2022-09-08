from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.models import User

# Create your views here.


def index(request):
    return HttpResponse("big virus")


def checkLoginStatus(request):
    if request.POST:
        return HttpResponse("big virus")

    logged_in = False

    if request.user.is_authenticated:
        logged_in = True
    return JsonResponse({"response": logged_in})
