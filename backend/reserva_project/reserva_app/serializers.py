from rest_framework import serializers
from .models import *

class ReservaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reserva
        fields ="__all__"
