from django.urls import path
from frontend.views import FrontendRenderView
from . import views
urlpatterns = [
    path('', FrontendRenderView.as_view())
]
