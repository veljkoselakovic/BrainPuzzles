import datetime
from MySQLdb import IntegrityError
from django.http import HttpRequest
from django.shortcuts import redirect, render
from django.views import View
from django.contrib.auth import login, authenticate, logout
from django.db import IntegrityError

from django.contrib import messages


# Create your views here.


from .models import Korisnik


class MainView(View) :
    

    def get(self, request):

        return render(request, 'base.html', {})


    def post(self, request):
        
        print(request.POST.get("user"))

        user = request.POST.get("user")
        password = request.POST.get("pass")

        user = authenticate(username=user, password=password)
        if user:
            # login(request, user)
            return render(request, 'successRegistration.html', {'user' : request.POST.get("pass")})
        else:
            messages.error(request, 'Invalid log in information')

            return redirect('main_page')


class SuccessRegView(View):


    def get(self, request):
        return render(request, 'succesRegistration.html', {})

class RegisterView(View) :
    

    def get(self, request):
        return render(request, 'base.html', {})

    def post(self, request):
        info = {
            'username' : request.POST.get('user'),
            'email' : request.POST.get('email'),
            'password' : request.POST.get('pass')
        }


        try:
            newKorisnik = Korisnik()
            newKorisnik.set_password(info['password'])
            newKorisnik.username = (info['username'])
            newKorisnik.email = (info['email'])
            newKorisnik.is_superuser = False
            newKorisnik.first_name = ""
            newKorisnik.last_name = ""
            newKorisnik.is_staff = False
            newKorisnik.is_staff = True
            newKorisnik.date_joined = datetime.datetime.now()
            newKorisnik.opis = ""
            newKorisnik.titula = "b"
            newKorisnik.slika = ""
        
            newKorisnik.save()
            messages.success(request, 'Successfully registered.')

        
        except IntegrityError as I:
            if 'email' in str(I):
                messages.error(request, 'Email already exists')
            elif 'user' in str(I):
                messages.error(request, 'Username already exists')
            else:
                messages.error(request, 'Unknown error')

            return redirect("registration_page")



        return render(request, 'successRegistration.html', {})