from django.urls import path
from . import views

urlpatterns = [
    path("/", views.add_user, name="test-get"),
    path("/", views.get_user, name="test-get"),
]
