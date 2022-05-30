# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


from django.contrib.auth.models import AbstractUser



class Korisnik(AbstractUser):
    # idk = models.AutoField(db_column='idK', primary_key=True)  # Field name made lowercase.
    # korisnickoime = models.CharField(db_column='korisnickoIme', unique=True, max_length=45)  # Field name made lowercase.
    # sifra = models.CharField(max_length=45)
    opis = models.CharField(max_length=200, blank=True, null=True)
    # email = models.CharField(unique=True, max_length=45)
    # datumuclanjenja = models.DateTimeField(db_column='datumUclanjenja', blank=True, null=True)  # Field name made lowercase.
    # admin = models.IntegerField(blank=True, null=True)
    titula = models.CharField(max_length=45, blank=True, null=True)
    slika = models.TextField(blank=True, null=True)

    class Meta:
        db_table = 'korisnik'


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)



class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(Korisnik, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class FightListPojam(models.Model):
    idp = models.AutoField(db_column='idP', primary_key=True)  # Field name made lowercase.
    idt = models.ForeignKey('FightListTema', models.DO_NOTHING, db_column='idT')  # Field name made lowercase.
    tekst = models.CharField(max_length=100)
    poeni = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'fight_list_pojam'


class FightListTema(models.Model):
    idt = models.AutoField(db_column='idT', primary_key=True)  # Field name made lowercase.
    tema = models.CharField(max_length=100)
    idk = models.ForeignKey('Korisnik', models.DO_NOTHING, db_column='idK')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'fight_list_tema'


class KzzOdgovor(models.Model):
    ido = models.AutoField(db_column='idO', primary_key=True)  # Field name made lowercase.
    idp = models.ForeignKey('KzzPitanje', models.DO_NOTHING, db_column='idP')  # Field name made lowercase.
    tekst = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'kzz_odgovor'


class KzzPitanje(models.Model):
    idp = models.AutoField(db_column='idP', primary_key=True)  # Field name made lowercase.
    tekst = models.CharField(max_length=300)
    idk = models.ForeignKey(Korisnik, models.DO_NOTHING, db_column='idK')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'kzz_pitanje'


class Rezultat(models.Model):
    idm = models.AutoField(db_column='idM', primary_key=True)  # Field name made lowercase.
    idk = models.ForeignKey(Korisnik, models.DO_NOTHING, db_column='idK')  # Field name made lowercase.
    fightlistrezultat = models.IntegerField(db_column='fightListRezultat', blank=True, null=True)  # Field name made lowercase.
    mozgicrezultat = models.IntegerField(db_column='mozgicRezultat', blank=True, null=True)  # Field name made lowercase.
    kzzrezultat = models.IntegerField(db_column='kzzRezultat', blank=True, null=True)  # Field name made lowercase.
    rezultat = models.IntegerField(blank=True, null=True)
    vremeigranja = models.DateTimeField(db_column='vremeIgranja', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'rezultat'


class Statistika(models.Model):
    idk = models.OneToOneField(Korisnik, models.DO_NOTHING, db_column='idK', primary_key=True)  # Field name made lowercase.
    highscore = models.IntegerField(db_column='highScore', blank=True, null=True)  # Field name made lowercase.
    totalscore = models.IntegerField(db_column='totalScore', blank=True, null=True)  # Field name made lowercase.
    prosekfightlist = models.FloatField(db_column='prosekFightList', blank=True, null=True)  # Field name made lowercase.
    prosekmozgic = models.FloatField(db_column='prosekMozgic', blank=True, null=True)  # Field name made lowercase.
    prosekkzz = models.FloatField(db_column='prosekKZZ', blank=True, null=True)  # Field name made lowercase.
    brodigranih = models.IntegerField(db_column='brOdigranih', blank=True, null=True)  # Field name made lowercase.
    prosek = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'statistika'