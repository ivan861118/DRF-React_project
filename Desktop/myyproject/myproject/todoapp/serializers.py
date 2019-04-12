from rest_framework import serializers
from todoapp.models import TodoApp

class TodoAppSerializer(serializers.ModelSerializer):
    class Meta:
        model = TodoApp
        fields = '__all__'
