from django.shortcuts import render

# Create your views here.
from todoapp.models import TodoApp
from todoapp.serializers import TodoAppSerializer
from rest_framework import viewsets

class TodoAppViewSet(viewsets.ModelViewSet):
    queryset = TodoApp.objects.all()
    serializer_class = TodoAppSerializer