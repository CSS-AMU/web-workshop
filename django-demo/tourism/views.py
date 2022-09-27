from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Bird

# Create your views here.
def home(request):
    return render(request,"home.html")

def about(request):
    return render(request,"about.html")

def contact(request, name):
    print(name)
    return render(request,"contact.html", {"name" : name})

def bird(request):
    birds = Bird.objects.all()
    return render(request,"bird.html", {"birds": birds})

def addbird(request):
    if request.method=="POST":
        name = request.POST["name"]
        country = request.POST["country"]
        try:
            obj = Bird.objects.create(name=name,country=country)
            obj.save()
        except Exception as e:
            print(e)
        return redirect("bird")

    return render(request,"addbird.html")

def add(request):
    if request.method=='POST':
        num1 = int(request.POST["num1"])
        num2 = int(request.POST["num2"])
        res = num1+num2
        return render(request,"result.html", {"result":res})
    return render(request,"result.html")