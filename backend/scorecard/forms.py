from django import forms
from .models import GCEvent
from django.forms import DateTimeInput


class gcForm(forms.ModelForm):
    class Meta:
        model = GCEvent
        fields = '__all__'
        widgets = {
            'start_timeline': DateTimeInput(attrs={'type': 'datetime-local'}, format='%Y-%m-%dT%H:%M'),
            'end_timeline': DateTimeInput(attrs={'type': 'datetime-local'}, format='%Y-%m-%dT%H:%M'),
        }
