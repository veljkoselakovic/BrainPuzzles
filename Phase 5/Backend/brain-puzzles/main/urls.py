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

from .views import MainView, RegisterView, SuccessRegView, DashboardView, LogoutView

urlpatterns = [
    path('', MainView.as_view(), name="main_page"),
    path('register', RegisterView.as_view(), name="registration_page"),
    path('successReg', SuccessRegView.as_view(), name="succes_reg_page"),
    path('dashboard', DashboardView.as_view(), name="dashboard_page"),
    path('logout', LogoutView.as_view(), name="logout_page")



    # path('alternate', AlternateView.as_view(), name="alternate_page"),
]
