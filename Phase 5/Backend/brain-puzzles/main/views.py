from django.http import HttpRequest
from django.shortcuts import redirect, render
from django.views import View

# Create your views here.


class MainView(View) :
    

    def get(self, request):
        return render(request, 'base.html', {})


class SuccessRegView(View):


    def get(self, request):
        return render(request, 'succesRegistration.html', {})

class RegisterView(View) :
    

    def get(self, request):
        return render(request, 'base.html', {})

    def post(self, request):

        return render(request, 'successRegistration.html', {})