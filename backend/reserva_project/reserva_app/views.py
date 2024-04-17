from rest_framework import status
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet

from .models import *
from .serializers import *

class ReservaView(ViewSet):
    
    def create(self, request):
        serializer = ReservaSerializer(data=request.data)
        
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        queryset = Reserva.objects.create(**serializer.validated_data)
        serializer = ReservaSerializer(queryset)
        
        return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        
    def list_all(self, request):
        queryset = Reserva.objects.all()
        serializer = ReservaSerializer(queryset, many=True)
        
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    
    def retrieve(self, request, pk):
        queryset = Reserva.objects.filter(pk=pk).first()

        if not queryset:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = ReservaSerializer(queryset)

        return Response(serializer.data, status=status.HTTP_200_OK)
