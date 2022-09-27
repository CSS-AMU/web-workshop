from django.db import models
from django.contrib.auth import User

# Create your models here.
class Bird(models.Model):
    name = models.CharField(max_length=100)
    user = models.ForeignKey(User)
    country = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name}"
