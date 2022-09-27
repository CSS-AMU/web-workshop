from django.urls import path
from .views import home,about,contact,add,bird,addbird

urlpatterns = [
    path('', home, name="home"),
    path('about/', about, name="about"),
    path('contact/<str:name>/', contact, name="contact"),
    path('add/', add, name="add"),
    path('bird/', bird, name="bird"),
    path('addbird/', addbird, name="add-bird")
]