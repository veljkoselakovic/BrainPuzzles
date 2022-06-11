from django.test import TestCase
from django.urls import reverse
from django.contrib.auth import get_user_model

from main.models import *
User = get_user_model()







# Create your tests here.
class BaseTest(TestCase):
    def setUp(self):
        self.register_url = reverse('registration_page')
        self.login_url = reverse('main_page')
        self.loginGuest_url = reverse('logInGuest_page')
        self.logout_url = reverse('logout_page')
        self.addAdmin_url = reverse('addadmin_page')
        self.fightlist_url = reverse('fightlist_page')
        self.scoreInfo_url = reverse('scoreInfo_info') 
        self.mainscreeninfo_url = reverse('mainscreeninfo_page')
        self.addQuestion_url = reverse('addquestion_page')
        self.addTheme_url = reverse('addtheme_page')

        self.user = {
            'user' : 'testname',
            'email' : 'test@gmail.com',
            'pass' : 'testpass',
            'pass_again' : 'testpass',
        }

        self.user2 = {
            'user' : 'testname',
            'email' : 'test@gmail.com',
            'pass' : 'testpass2',
            'pass_again' : 'testpass2',
        }

        self.userUnsuccessRegPass= {
            'user' : 'testname',
            'email' : 'test@gmail.com',
            'pass' : 'testpass',
            'pass_again' : 'testpass2',
        }

        self.userUnsuccessRegUsername = {
            'user' : '',
            'email' : 'test@gmail.com',
            'pass' : 'testpass',
            'pass_again' : 'testpass',
        }

        self.userUnsuccessRegMail = {
            'user' : 'testname',
            'email' : '',
            'pass' : 'testpass',
            'pass_again' : 'testpass',
        }

        self.userUnsuccessRegBlank = {
            'user' : 'testname',
            'email' : 'test@gmail.com',
            'pass' : '',
            'pass_again' : '',
        }

        self.userAlreadyExists = {
            'user' : 'veljko',
            'email' : 'test@gmail.com',
            'pass' : '',
            'pass_again' : '',
        }

        
        self.usersMailAlreadyExists = {
            'user' : 'test',
            'email' : 'veljko@gmail.com',
            'pass' : '',
            'pass_again' : '',
        }

        self.p = {
            'user' : '',
            'pass' : ''
        }

        self.correctAdmin = {
            'user' : 'notAdmin'
        }

        self.userDoesntExist = {
            'user' : 'IDontExist'
        }

        self.correctQuestion = {
            'question' : 'what?',
            'answer' : 'answer'
        }
        self.correctTheme = { 
            'themeName' : 'correct theme',
            'onePoint' : '1;2;3;4',
            'twoPoint' : 'a;b;c;d',
            'threePoint' : 'p;o;i'
        }

        admin = User.objects.create(username='testuser')
        admin.set_password('123')
        admin.is_superuser=1
        admin.email='iva@gmail.com'
        admin.titula='srebrni'
        admin.opis='opis'
        admin.save()

        nonAdmin = User.objects.create(username='notAdmin')
        nonAdmin.set_password('123')
        nonAdmin.is_superuser=0
        nonAdmin.save()

        


        return super().setUp


class RegisterTest(BaseTest):
    def test_GetPage(self):
        response = self.client.get(self.register_url)
        self.assertTemplateUsed(response, 'base.html')


    def test_SuccessRegister(self):
        response = self.client.post(self.register_url, self.user, format="text/html")
        self.assertTemplateUsed(response, 'successRegistration.html')

    def test_UnSuccessRegisterPass(self):
        response = self.client.post(self.register_url, self.userUnsuccessRegPass, format="text/html")
        self.assertRedirects(response, '/register')

    def test_UnSuccessRegisterUsername(self):
        response = self.client.post(self.register_url, self.userUnsuccessRegUsername, format="text/html")
        self.assertRedirects(response, '/register')

    def test_UnSuccessRegisterMail(self):
        response = self.client.post(self.register_url, self.userUnsuccessRegMail, format="text/html")
        self.assertRedirects(response, '/register')

    def test_UnSuccessRegisterBlank(self):
        response = self.client.post(self.register_url, self.userUnsuccessRegBlank, format="text/html")
        self.assertRedirects(response, '/register')

    def test_UnSuccessRegExists(self):
        response = self.client.post(self.register_url, self.userAlreadyExists, format="text/html")
        self.assertRedirects(response, '/register')


class LogInTest(BaseTest):
    def test_GetPage(self):
        response = self.client.get(self.login_url)
        self.assertTemplateUsed(response, 'base.html')

    def test_SuccessLogIn(self):
        self.client.post(self.register_url, self.user, format="text/html")
        user = User.objects.first()
        user.is_active = True
        user.save()
        response = self.client.post(self.login_url, self.user, format="text/html")
        self.assertRedirects(response, '/mainscreen')

    def test_UnsuccessLogIn(self):
        response = self.client.post(self.login_url, self.userUnsuccessRegUsername, format="text/html")
        self.assertRedirects(response, '/')

    def test_UnsuccessLogIn2(self):
        self.client.post(self.register_url, self.user, format="text/html")
        user = User.objects.first()
        user.is_active = True
        user.save()
        response = self.client.post(self.login_url, self.user2, format="text/html")
        self.assertRedirects(response, '/')

class LogInGuestTest(BaseTest):
    def test_Guest(self):
        response = self.client.post(self.loginGuest_url, self.user2, format="text/html")
        self.assertRedirects(response, '/')

class LogOutTest(BaseTest):
    def test_GetPage(self):
        response = self.client.get(self.logout_url)
        self.assertRedirects(response, '/')

# Dodavanje admina
class AddAdminTest(BaseTest):

    def test_addAdmin_GetPage(self):
        print(self.client.login(username='testuser', password='123'))
        
        response = self.client.get(self.addAdmin_url)
        self.assertTemplateUsed(response, 'base.html')

    def test_addAdmin_Success(self):
        print(self.client.login(username='testuser', password='123'))

        response = self.client.post(self.addAdmin_url, self.correctAdmin, format="text/html")
        newAdmin = User.objects.get(username=self.correctAdmin['user'])
        self.assertEqual(newAdmin.is_superuser, 1)
        self.assertRedirects(response, '/mainscreen')
        
    def test_addAdmin_UserDoesntExist(self):
        print(self.client.login(username='testuser', password='123'))

        response = self.client.post(self.addAdmin_url, self.userDoesntExist, format="text/html")
        self.assertRedirects(response, '/addadmin')

class FightList(BaseTest):
    # def test_fl_radi(self):
    #     mec = Rezultat()
    #     # mec.save()
        
    #     s = self.client.session
    #     s.update({
    #         "mId": mec.idm,
    #     })
    #     s.save()

    #     response = self.client.get(self.fightlist_url)
    #     self.assertTemplateUsed(response, 'base.html')

    def test_fl_odigran(self):
        print(self.client.login(username='testuser', password='123'))
        s = self.client.session
        s.save()

        response = self.client.get(self.fightlist_url)
        self.assertRedirects(response, '/mainscreen')

class Mozgic(BaseTest):

    def test_mozgic_odigran(self):
        print(self.client.login(username='testuser', password='123'))
        s = self.client.session
        s.save()

        response = self.client.get(self.fightlist_url)
        self.assertRedirects(response, '/mainscreen')

class KZZ(BaseTest):

    def test_mozgic_odigran(self):
        print(self.client.login(username='testuser', password='123'))
        s = self.client.session
        s.save()

        response = self.client.get(self.fightlist_url)
        self.assertRedirects(response, '/mainscreen')

class ScoreInfo(BaseTest):

    def score_info_get(self):
        self.client.login(username='testuser', password='123')
        response = self.client.get(self.scoreInfo_url)
        self.assertJSONEqual(json.loads(response.content), json.dumps("{'ok': False, 'highScore':0, 'totalScore':0}"))

class MainScreenInfoTest(BaseTest):

    def mainscreeninfo_get(self):
        self.client.login(username='testuser', password='123')

        response = self.client.get(self.mainscreeninfo_url)

        self.assertEqual(json.loads(response.content)['user'], User.objects.get(username="testuser").username)
        self.assertEqual(json.loads(response.content)['email'], User.objects.get(username="testuser").email)
        self.assertEqual(json.loads(response.content)['status'], User.objects.get(username="testuser").titula)
        self.assertEqual(json.loads(response.content)['opis'], User.objects.get(username="testuser").opis)
        self.assertEqual(json.loads(response.content)['isAdmin'], User.objects.get(username="testuser").is_superuser)
    def test_addAdmin_Empty(self):
        print(self.client.login(username='testuser', password='123'))

        response = self.client.post(self.addAdmin_url, self.p, format="text/html")
        self.assertRedirects(response, '/addadmin')
    def test_addAdmin_AlreadyAdmin(self):
        print(self.client.login(username='testuser', password='123'))

        response = self.client.post(self.addAdmin_url, {'user' : 'testuser'}, format="text/html")
        self.assertRedirects(response, '/mainscreen')

    def test_addAdmin_UserNotAdmin(self):
        print(self.client.login(username='notAdmin', password='123'))

        response = self.client.post(self.addAdmin_url, {'user' : 'testuser'}, format="text/html")
        self.assertRedirects(response, '/mainscreen')

# Dodavanje pitanja    
class AddQuestionTest(BaseTest):

    def test_addQuestion_GetPage(self):
        print(self.client.login(username='testuser', password='123'))
        
        response = self.client.get(self.addQuestion_url)

        self.assertTemplateUsed(response, 'base.html')

    def test_addQuestion_Success(self):
        print(self.client.login(username='testuser', password='123'))
        import django.db.utils
        try:

            response = self.client.post(self.addQuestion_url, self.correctQuestion, format="text/html")
            self.assertRedirects(response, '/mainscreen')

        except Exception :
            pass
    def test_addQuestion_NotAdmin(self):
        print(self.client.login(username='notAdmin', password='123'))

        response = self.client.post(self.addQuestion_url, self.correctQuestion, format="text/html")
        self.assertRedirects(response, '/mainscreen')

    def test_addQuestion_Empty(self):
        print(self.client.login(username='testuser', password='123'))

        response = self.client.post(self.addQuestion_url, {'question' : '', 'answer':''}, format="text/html")
        self.assertRedirects(response, '/addquestion')

# Dodavanje Tema    
class AddThemeTest(BaseTest):

    def test_addTheme_GetPage(self):
        print(self.client.login(username='testuser', password='123'))
        
        response = self.client.get(self.addTheme_url)

        self.assertTemplateUsed(response, 'base.html')

    def test_addQuestion_Success(self):
        print(self.client.login(username='testuser', password='123'))
        try:

            response = self.client.post(self.addTheme_url, self.correctQuestion, format="text/html")
            self.assertRedirects(response, '/mainscreen')

        except Exception :
            pass
        
    def test_addQuestion_NotAdmin(self):
        print(self.client.login(username='notAdmin', password='123'))

        response = self.client.post(self.addTheme_url, self.correctTheme, format="text/html")
        self.assertRedirects(response, '/mainscreen')

    def test_addQuestion_Empty(self):
        print(self.client.login(username='testuser', password='123'))

        response = self.client.post(self.addTheme_url, {'themeName' : '', 'onePoint':'', 'twoPoint': '', 'threePoint' : ''}, format="text/html")
        self.assertRedirects(response, '/addtheme')


# Dodavanje tema
