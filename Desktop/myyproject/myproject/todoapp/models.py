from django.db import models

# Create your models here.
class TodoApp(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=20)
    completed = models.BooleanField(default=False)

