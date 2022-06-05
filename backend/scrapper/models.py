from django.db import models

# Create your models here.


class Scrapper(models.Model):

    name = models.CharField(max_length=40)
