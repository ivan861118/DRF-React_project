from django.urls import path
from myapp.views import Audio,LeadListCreate,Test

urlpatterns = [
    path('audio', Audio.as_view()),
    path('api/lead/', LeadListCreate.as_view() ),
    path('test',Test.as_view() ), ## for sass template test

    
]