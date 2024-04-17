from django.urls import path
from . import views

urlpatterns = [
    # path reserva
    path('reserva/list/', views.ReservaView.as_view({'get': 'list_all'})),
    path('reserva/create/', views.ReservaView.as_view({'post': 'create'})),
    path('reserva/<int:pk>/', views.ReservaView.as_view({'get': 'retrieve'})),
]
