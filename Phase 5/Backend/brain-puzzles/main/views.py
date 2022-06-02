import datetime
from MySQLdb import IntegrityError
from django.http import HttpRequest, HttpResponse, JsonResponse
from django.shortcuts import redirect, render
from django.views import View
from django.contrib.auth import login, authenticate, logout
from django.db import IntegrityError
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator

import json
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


class DashboardInfoView(View):

    @method_decorator(login_required)
    def get(self, request):
        matchId = request.session.get('mId', -1)
        print("matchId = " + str(matchId))
        if matchId == -1:
            newMatch = Rezultat()
            newMatch.idk = request.user
            newMatch.rezultat = 0
            newMatch.vremeigranja = datetime.datetime.now()

            newMatch.save()
            request.session['mId'] = newMatch.idm

        match = Rezultat.objects.get(idm=request.session['mId'])

        info = {
        'user' :  request.user.username,
        'email' : request.user.email,
        'status' : request.user.titula,
        'opis' : request.user.opis,
        'flRez' : match.fightlistrezultat,
        'kzzRez' : match.kzzrezultat,
        'mRez' : match.mozgicrezultat
        }

        return JsonResponse(info)



class DashboardView(View):

    @method_decorator(login_required)
    def get(self, request):
        mId = request.session.get('mId', -1)
        if(mId != -1):
            match = Rezultat.objects.get(idm=request.session['mId'])
            fl = match.fightlistrezultat
            m = match.mozgicrezultat
            kzz = match.kzzrezultat
            status = request.user.titula
            if(status == 'Bronzani' and fl != None or status == 'Srebrni' and fl != None and m != None or status == 'Zlatni' and fl != None and m != None and kzz != None):
                try:
                    statistika = Statistika.objects.get(idk=request.user)
                    noviPoeni = 0
                    statistika.brodigranih += 1
                    if(status == 'Bronzani'):
                        noviPoeni += fl
                    if(status == 'Srebrni'):
                        noviPoeni += fl + m
                    if(status == 'Zlatni' ):
                        noviPoeni += fl + m + kzz
                    
                    statistika.totalscore += noviPoeni
                    if(statistika.highscore < noviPoeni):
                        statistika.highscore = noviPoeni
                    statistika.prosek = (statistika.prosek*(statistika.brodigranih-1) + noviPoeni) / statistika.brodigranih

                    if(status == 'Bronzani' and statistika.totalscore > 15): 
                        request.user.titula = 'Srebrni'
                        request.user.save()
                    if(status == 'Srebrni' and statistika.totalscore > 36):
                        request.user.titula = 'Zlatni'
                        request.user.save()
                    match.rezultat = noviPoeni
                    match.save()
                    statistika.save()
                except  Statistika.DoesNotExist: #prvi put zavrsena partija, samo fl imamo
                    statistika = Statistika()
                    statistika.idk = request.user
                    statistika.highscore = fl
                    statistika.totalscore = fl
                    statistika.brodigranih = 1
                    statistika.prosek = fl
                    match.rezultat = fl
                    match.save()
                    statistika.save()
                request.session['mId'] = -1
                if "fightListPoints" in self.request.session.keys():
                    del self.request.session["fightListPoints"]
                if "mozgicPoints" in self.request.session.keys():
                    del self.request.session["mozgicPoints"]
                if "kzzPoints" in self.request.session.keys():
                    del self.request.session["kzzPoints"]
                return redirect('mainscreen_page')


        matchId = request.session.get('mId', -1)
        if matchId == -1:
            newMatch = Rezultat()
            newMatch.idk = request.user
            newMatch.rezultat = 0
            newMatch.vremeigranja = datetime.datetime.now()

            newMatch.save()
            request.session['mId'] = newMatch.idm

        match = Rezultat.objects.get(idm=request.session['mId'])

        info = {
        'user' :  request.user.username,
        'email' : request.user.email,
        'status' : request.user.titula,
        'opis' : request.user.opis,
        'flRez' : match.fightlistrezultat,
        'kzzRez' : match.kzzrezultat,
        'mRez' : match.mozgicrezultat
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
            'password' : request.POST.get('pass'),
            'passwordAgain' : request.POST.get('pass_again')
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
            newKorisnik.titula = "Bronzani"
            newKorisnik.slika = ""

            if(info['password'] != info['passwordAgain']):
                messages.error(request, 'Passwords do not match')
                return redirect("registration_page")
        
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

class MainScreenView(View):

    @method_decorator(login_required)
    def get(self, request):
        info = {
        'user' :  request.user.username,
        'email' : request.user.email,
        'status' : request.user.titula,
        'opis' : request.user.opis,
        'isAdmin' : request.user.is_superuser
        }

        return render(request, 'base.html', {'jsonInfo': info})

class MainScreenInfoView(View):

    @method_decorator(login_required)
    def get(self, request):
        returnJSON = {
        'user' :  request.user.username,
        'email' : request.user.email,
        'status' : request.user.titula,
        'opis' : request.user.opis,
        'isAdmin' : request.user.is_superuser
        }

        return JsonResponse(returnJSON)

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

class RankingView(View):

    def get(self, request):
        rankings = list(Statistika.objects.all())
        rankings.sort(key=lambda x: x.totalscore, reverse=True)
        rankings = rankings[:10]
        korisniks =  [r.idk for r in rankings]
        usernames = [k.username for k in korisniks]
        highScores = [r.highscore for r in rankings]
        pairs = [];
        for (username, highScore) in zip(usernames, highScores):
            pairs.append(username + "," + str(highScore))

        info = {
            'pairs' : pairs
        }
        return render(request, 'base.html', {'jsonInfo': info})

class RankingInfoView(View):

    def get(self, request):
        rankings = list(Statistika.objects.all())
        rankings.sort(key=lambda x: x.totalscore, reverse=True)
        rankings = rankings[:10]
        korisniks =  [r.idk for r in rankings]
        usernames = [k.username for k in korisniks]
        highScores = [r.highscore for r in rankings]
        pairs = [];
        for (username, highScore) in zip(usernames, highScores):
            pairs.append(username + "," + str(highScore))

        returnJSON = {
            'pairs' : pairs
        }
        return JsonResponse(returnJSON)

class FightListView(View):

    @method_decorator(login_required)
    def get(self, request):

        try:
            if request.session['fightListPoints'] != 0:
                return redirect('mainscreen_page')
        except:
            pass

        try:
            match = Rezultat.objects.get(idm=request.session['mId'])
        except KeyError:
            return redirect('mainscreen_page')

        if match.fightlistrezultat != None:
            return redirect("/dashboard")

        import random

        themes = list(FightListTema.objects.all())
        random_themes = random.sample(themes, 1)
        random_theme = random.choice(random_themes)
        request.session['themeId'] = int(random_theme.idt)
        request.session['triedGuesses'] = []
        request.session['fightListPoints'] = 0

        info = {
            'themeName' : random_theme.tema,
            'themeId' : random_theme.idt
        }

        return render(request, 'base.html', {'jsonInfo': info})

    @method_decorator(login_required)
    def post(self, request):

        data = json.loads(request.body)
        print(data)

        guess = data['guessValue']
        guess = guess.lower().capitalize()
        if guess in request.session['triedGuesses']:

            returnJSON = {
                'ok' : True,
                'guess' : guess,
                'points' : 0
            }
            return JsonResponse(returnJSON)

        try:
            item = FightListPojam.objects.filter(idt=request.session['themeId']).get(tekst=guess)
            returnJSON = {
                'ok' : True,
                'guess' : item.tekst,
                'points' : item.poeni
            }
            request.session['triedGuesses'] += [item.tekst]
            request.session['fightListPoints'] += item.poeni

            return JsonResponse(returnJSON)
        except FightListPojam.DoesNotExist:

            returnJSON = {
                'ok' : True,
                'guess' : guess,
                'points' : 0
            }
            return JsonResponse(returnJSON)

class FighListSubmitView(View):

    @method_decorator(login_required)
    def post(self, request):
        match = Rezultat.objects.get(pk=request.session['mId'])

        if match.fightlistrezultat is not None:
            match.fightlistrezultat += request.session['fightListPoints']
        else:
            match.fightlistrezultat = request.session['fightListPoints']

        match.save()

        return JsonResponse({'ok' : True})

class KZZView(View):

    @method_decorator(login_required)
    def get(self, request):

        try:
            if request.session['kzzPoints'] != 0:
                return redirect('mainscreen_page')
        except:
            pass

        try:
            match = Rezultat.objects.get(idm=request.session['mId'])
        except KeyError:
            return redirect('mainscreen_page')

        if match.kzzrezultat != None:
            return redirect("/dashboard")
        
        request.session['kzzPoints'] = 0
        request.session['pastQuestions'] = []

        return render(request, 'base.html', {})

class KZZQuestionView(View):

    @method_decorator(login_required)
    def get(self, request):

        import random

        questions = list(KzzPitanje.objects.all())
        random_questions = random.sample(questions, 1)
        random_question = random.choice(random_questions)

        while int(random_question.idp) in request.session['pastQuestions']:
            random_questions = random.sample(questions, 1)
            random_question = random.choice(random_questions)

        request.session['questionId'] = int(random_question.idp)
        request.session['pastQuestions'] += [int(random_question.idp)]

        info = {
            'questionText' : random_question.tekst,
            'questionId' : random_question.idp
        }

        return JsonResponse(info)

    @method_decorator(login_required)
    def post(self, request):

        data = json.loads(request.body)

        answer = data['answerValue']
        answer = answer.lower().capitalize()

        try:
            item = KzzOdgovor.objects.filter(idp=request.session['questionId']).get(tekst=answer)
            returnJSON = {
                'isCorrect' : 1,
                'correctAnswer' : item.tekst,
                'points' : 6
            }
            request.session['kzzPoints'] += 6

            return JsonResponse(returnJSON)
        except KzzOdgovor.DoesNotExist:

            returnJSON = {
                'isCorrect' : 0,
                'correctAnswer' : KzzOdgovor.objects.get(idp=request.session['questionId']).tekst,
                'points' : -3
            }
            request.session['kzzPoints'] -= 3

            return JsonResponse(returnJSON)

class KZZEnd(View):

    @method_decorator(login_required)
    def post(self, request):
        match = Rezultat.objects.get(pk=request.session['mId'])

        if match.kzzrezultat is not None:
            match.kzzrezultat += request.session['kzzPoints']
        else:
            match.kzzrezultat = request.session['kzzPoints']

        match.save()

        return JsonResponse({'ok' : True})

class MozgicView(View):

    def get(self, request):

        try:
            if request.session['mozgicPoints'] != 0:
                return redirect('mainscreen_page')
        except:
            pass

        try:
            match = Rezultat.objects.get(idm=request.session['mId'])
        except KeyError:
            return redirect('mainscreen_page')

        if match.mozgicrezultat != None:
            return redirect("/dashboard")
        
        request.session['mozgicPoints'] = 0

        return render(request, 'base.html', {})

class MozgicSubmitView(View):

    def post(self, request):

        data = json.loads(request.body)
        pts = data['mozgicPts']

        match = Rezultat.objects.get(pk=request.session['mId'])
        match.mozgicrezultat = pts
        match.save()

        request.session['mozgicPoints'] = pts

        return JsonResponse({'ok' : True})

class AboutMeView(View):

    @method_decorator(login_required)
    def post(self, request):
        data = json.loads(request.body)
        aboutMe = data['aboutMe']
        request.user.opis = aboutMe
        request.user.save()
        print("posle " + request.user.opis)
        return JsonResponse({'ok' : True})

class MozgicSubmitView(View):

    @method_decorator(login_required)
    def post(self, request):

        data = json.loads(request.body)
        pts = data['mozgicPts']

        match = Rezultat.objects.get(pk=request.session['mId'])
        
        if match.mozgicrezultat is not None:
            match.mozgicrezultat += pts
        else:
            match.mozgicrezultat = pts

        print(pts)

        match.save()

        return JsonResponse({'ok' : True})

class ScoreInfoView(View):


    @method_decorator(login_required)
    def get(self, request):

        stat = Statistika.objects.get(pk=request.user.id)
        jsonRes = {
            'ok' : True,
            'highScore' : stat.highscore,
            'totalScore' : stat.totalscore
        }

        return JsonResponse(jsonRes)
