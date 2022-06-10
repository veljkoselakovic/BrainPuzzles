from django.test import TestCase
from django.urls import reverse
from django.contrib.auth import get_user_model
User = get_user_model()

# Create your tests here.
class BaseTest(TestCase):
    def setUp(self):
        self.register_url = reverse('registration_page')
        self.login_url = reverse('main_page')
        self.loginGuest_url = reverse('logInGuest_page')
        self.logout_url = reverse('logout_page')
        self.addAdmin_url = reverse('addadmin_page')

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
            'user' : 'teodor'
        }

        self.userDoesntExist = {
            'user' : 'IDontExist'
        }
        admin = User.objects.create(username='testuser')
        admin.set_password('123')
        admin.is_superuser=1
        admin.save()




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
# Dodavanje pitanja
# Dodavanje tema
class AddAdminTest(BaseTest):

    def test_addAdmin_GetPage(self):
        print(self.client.login(username='testuser', password='123'))
        

        response = self.client.get(self.addAdmin_url)
        print(response)
        self.assertTemplateUsed(response, 'base.html')

    def test_addAdmin_Succes(self):
        print(self.client.login(username='testuser', password='123'))

        response = self.client.post(self.addAdmin_url, self.correctAdmin, format="text/html")
        
        newAdmin = User.objects.get(username=self.correctAdmin['user'])
        self.assertEqual(newAdmin.is_superuser, 1)
        self.assertRedirects(response, '/mainscreen')
        
    def test_addAdmin_UserDoesntExist(self):
        print(self.client.login(username='testuser', password='123'))

        response = self.client.post(self.addAdmin_url, self.userDoesntExist, format="text/html")
        print(response)
        self.assertRedirects(response, '/addadmin')

