from django.urls import path, include

from . import views

urlpatterns = [
    path("", views.index),
    path("about", views.index),
    path("accounts/register", views.register),
]
