import datetime
from MySQLdb import IntegrityError
from django.http import HttpRequest
from django.shortcuts import redirect, render
from django.views import View
from django.contrib.auth import login, authenticate, logout
from django.db import IntegrityError
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator

# Create your views here.

from .models import *

class MainView(View) :
    
    # brain-puzzles.com/
    def get(self, request):

        if request.user.is_authenticated:
            return redirect('mainscreen_page')

        else:
            return render(request, 'base.html', {})


    def post(self, request):
        
        # print(request.POST.get("user"))

        user = request.POST.get("user")
        password = request.POST.get("pass")

        user = authenticate(username=user, password=password)
        if user:
            login(request, user)
            return redirect('mainscreen_page') # return redirect('/dashboard')
            # return render(request, 'successRegistration.html', {'user' : request.POST.get("pass")})
        else:
            messages.error(request, 'Invalid log in information')
            return redirect('main_page')

class LogoutView(View):

    def get(self, request):
        logout(request)
        return redirect('main_page')


class SuccessRegView(View):

    def get(self, request):
        return render(request, 'succesRegistration.html', {})

class DashboardView(View):

    @method_decorator(login_required)
    def get(self, request):
        info = {
        'user' :  request.user.username,
        'email' : request.user.email,
        'status' : request.user.titula,
        'opis' : request.user.opis,
        }

        return render(request, 'base.html', {'jsonInfo': info})

class RegisterView(View) :
    
    def get(self, request):
        if request.user.is_authenticated:
            return redirect('dashboard_page')

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
            newKorisnik.titula = "bronza"
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


        # HttpResponse
        # JSONResponse

        return render(request, 'successRegistration.html', {})

class MainScreenView(View):

    @method_decorator(login_required)
    def get(self, request):
        info = {
        'user' :  request.user.username,
        'email' : request.user.email,
        'status' : request.user.titula,
        'opis' : request.user.opis,
        }

        return render(request, 'base.html', {'jsonInfo': info})

class AddThemeView(View):
    
    @method_decorator(login_required)
    def get(self, request):
        print("get addtheme")
        info = {
        'user' :  request.user.username,
        'email' : request.user.email,
        'status' : request.user.titula,
        'opis' : request.user.opis,
        }
        return render(request, 'base.html', {'jsonInfo': info})

    @method_decorator(login_required)
    def post(self, request):
        info = {
        'user' :  request.user.username,
        'email' : request.user.email,
        'status' : request.user.titula,
        'opis' : request.user.opis,
        }
        trenutni_user = request.user
        tema_tekst = request.POST.get('themeName')
        jedanPoen = request.POST.get('onePoint')
        dvaPoena = request.POST.get('twoPoints')
        triPoena = request.POST.get('threePoints')
        if(jedanPoen): 
            jedanPoen = jedanPoen.split(";")
        else:
            jedanPoen = []
        if(dvaPoena): 
            dvaPoena = dvaPoena.split(";")
        else: 
            dvaPoena = []
        if(triPoena): 
            triPoena = triPoena.split(";")
        else:
            triPoena = []

        if(len(tema_tekst) == 0):
            return redirect('addtheme_page')

        tema = FightListTema()
        tema.idk = trenutni_user
        tema.tema = tema_tekst
        tema.save()

        for elem in jedanPoen:
            elem = elem.strip()
            pojam = FightListPojam()
            pojam.idt = tema
            pojam.tekst = elem
            pojam.poeni = 1
            pojam.save()
        for elem in dvaPoena:
            elem = elem.strip()
            pojam = FightListPojam()
            pojam.idt = tema
            pojam.tekst = elem
            pojam.poeni = 2
            pojam.save()
        for elem in triPoena:
            elem = elem.strip()
            pojam = FightListPojam()
            pojam.idt = tema
            pojam.tekst = elem
            pojam.poeni = 3
            pojam.save()
        
        return redirect('mainscreen_page')

class AddQuestionView(View):
    
    @method_decorator(login_required)
    def get(self, request):
        info = {
        'user' :  request.user.username,
        'email' : request.user.email,
        'status' : request.user.titula,
        'opis' : request.user.opis,
        }
        return render(request, 'base.html', {'jsonInfo': info})
        
    @method_decorator(login_required)
    def post(self, request):
        info = {
        'user' :  request.user.username,
        'email' : request.user.email,
        'status' : request.user.titula,
        'opis' : request.user.opis,
        }
        trenutni_user = request.user
        pitanje_tekst = request.POST.get('question')
        odgovor_tekst = request.POST.get('answer')
        if(not pitanje_tekst or not odgovor_tekst):
            return redirect('addquestion_page')

        pitanje = KzzPitanje()
        pitanje.idk = trenutni_user
        pitanje.tekst = pitanje_tekst
        pitanje.save()
        print("pitanje glasi " + pitanje_tekst)

        odgovor = KzzOdgovor()
        odgovor.idp = pitanje
        odgovor.tekst = odgovor_tekst
        odgovor.save()

        return redirect('mainscreen_page')

class AddAdminView(View):
    
    @method_decorator(login_required)
    def get(self, request):
        info = {
        'user' :  request.user.username,
        'email' : request.user.email,
        'status' : request.user.titula,
        'opis' : request.user.opis,
        }
        return render(request, 'base.html', {'jsonInfo': info})


    @method_decorator(login_required)
    def post(self, request):
        info = {
        'user' :  request.user.username,
        'email' : request.user.email,
        'status' : request.user.titula,
        'opis' : request.user.opis,
        }
        user = request.POST.get('user')
        try:
            newAdmin = Korisnik.objects.filter(username=user)[0]
            newAdmin.is_superuser = True
            newAdmin.save()

        except IndexError:
            return redirect('addadmin_page')

        return redirect('mainscreen_page')

class FightListView(View):

    def get(self, request):
        pass

class CheckAnswer(View):

    def get(self, request):
        pass

