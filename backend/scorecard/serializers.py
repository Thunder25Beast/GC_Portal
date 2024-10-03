from rest_framework import serializers
from .models import Score, GCEvent, Hostel


class scoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Score
        fields = ('hostel', 'event', 'score')


class gcserializer(serializers.ModelSerializer):
    class Meta:
        model = GCEvent
        fields = '__all__'


class hostelserializer(serializers.ModelSerializer):
    class Meta:
        model = Hostel
        fields = '__all__'
