from django.db import models
from django.contrib.auth.models import User


class Listing(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    price = models.FloatField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
