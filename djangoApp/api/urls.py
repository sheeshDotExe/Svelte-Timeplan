from django.urls import path, include

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("checkLoginStatus", views.checkLoginStatus),
    path("getTimeplan/<str:timeplan>", views.getTimeplanInfo),
]
