from django.http import HttpRequest
from django.shortcuts import render
from django.views import View

# Create your views here.


class MainView(View) :
    

    def get(self, request):
        return render(request, 'base.html', {})


class RegisterView(View) :
    

    def get(self, request):
        return render(request, 'base.html', {})

    def post(self, request):

        return HttpRequest("<h1>Registered</h1>")