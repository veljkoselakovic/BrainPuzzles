"""config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from .views import *

urlpatterns = [
    path('', MainView.as_view(), name="main_page"),
    path('register', RegisterView.as_view(), name="registration_page"),
    path('successReg', SuccessRegView.as_view(), name="succes_reg_page"),
    path('dashboard', DashboardView.as_view(), name="dashboard_page"),
    path('logout/', LogoutView.as_view(), name="logout_page"),
    path('mainscreen', MainScreenView.as_view(), name="mainscreen_page"),
    path('addadmin', AddAdminView.as_view(), name="addadmin_page"),
    path('addtheme', AddThemeView.as_view(), name="addtheme_page"),
    path('addquestion', AddQuestionView.as_view(), name="addquestion_page"),
    path('mozgic', MozgicView.as_view(), name="addquestion_page"),
    path('fightlist', FightListView.as_view(), name="fightlist_page"),
    path('fightlist_end', FighListSubmitView.as_view(), name="fightlist_submit"),
    path('aboutme', AboutMeView.as_view(), name="aboutme_page"),
    path('kzz', KZZView.as_view(), name="kzz_page"),
    path('kzzquestion', KZZQuestionView.as_view(), name="kzz_question"),
    path('kzz_end', KZZEnd.as_view(), name="kzz_end"),
    path('ranking', RankingView.as_view(), name="ranking_page"),
    path('rankingInfo', RankingInfoView.as_view(), name="rankinginfo_page"),
    path('mozgicSubmit', MozgicSubmitView.as_view(), name="mozgic_submit"),
    path('dashboardInfo', DashboardInfoView.as_view(), name="dashboard_info"),
    path('mainscreenInfo', MainScreenInfoView.as_view(), name="mainscreeninfo_page"),
    path('scoreInfo', ScoreInfoView.as_view(), name="scoreInfo_info"),


    # path('fightlist/id=?&guess=?')
    # brain-puzzles.com/register
    # location.href = "/register"
    # path('alternate', AlternateView.as_view(), name="alternate_page"),
]
