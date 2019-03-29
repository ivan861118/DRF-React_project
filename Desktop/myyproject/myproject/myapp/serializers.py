# from rest_framework import serializers
# from myapp.models import Music


# class MusicSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Music
#         fields = '__all__'
#         # fields = ('id', 'song', 'singer', 'last_modify_date', 'created')##回傳需要的參數

from rest_framework import serializers
from myapp.models import Lead
class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'
