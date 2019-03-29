from django.shortcuts import render
from django.http import HttpResponse
from django.views import View

from rest_framework import viewsets


# # Create your views here.

class Test(View):
    def get(self,request):
        return render(request,"myapp/test.html") 

class Audio(View):
    def get(self,request):
        return render(request,"myapp/audio.html") 

# from myapp.models import Music
# from myapp.serializers import MusicSerializer

# # Create your views here.
# class MusicViewSet(viewsets.ModelViewSet):
#     queryset = Music.objects.all()
#     serializer_class = MusicSerializer
    
from myapp.models import Lead
from myapp.serializers import LeadSerializer
from rest_framework import generics

class LeadListCreate(generics.ListCreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer