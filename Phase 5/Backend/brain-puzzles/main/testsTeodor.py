from django.test import TestCase
from django.urls import reverse
from django.http import HttpRequest

from .models import *
import json

class BaseTestTeodor(TestCase):
    def setUp(self):
        self.aboutme_url = reverse('aboutme_page')
        self.ranking_url = reverse('ranking_page')
        self.rankinginfo_url = reverse('rankinginfo_page')


        return super().setUp

class AboutMeTest(BaseTestTeodor):
    def test_ChangedAboutMe(self):
        korisnik = Korisnik()
        text = "someText"

        request = HttpRequest()
        request.user = korisnik
        request._body = json.dumps({
            'aboutMe': text
        })

        response = self.client.post(self.aboutme_url, request)

        self.assertEqual(json.loads(response.content)['ok'], True)
        self.assertEqual(korisnik.opis, text)