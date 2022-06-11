from django.test import TestCase
from django.urls import reverse
from django.contrib.auth import get_user_model

User = get_user_model()

from .models import *
import json

class BaseTestTeodor(TestCase):
    def setUp(self):
        self.aboutme_url = reverse('aboutme_page')
        self.ranking_url = reverse('ranking_page')
        self.rankinginfo_url = reverse('rankinginfo_page')

        admin = User.objects.create(username='testuser')
        admin.set_password('123')
        admin.is_superuser=1
        admin.save()

        return super().setUp

class AboutMeTest(BaseTestTeodor):
    def test_ChangedAboutMe(self):
        self.client.login(username='testuser', password='123')

        response = self.client.post(self.aboutme_url, json.dumps({'aboutMe': 'someText'}), content_type="application/json")

        self.assertEqual(User.objects.get(username="testuser").opis, "someText")
        self.assertTrue(json.loads(response.content)['ok'])