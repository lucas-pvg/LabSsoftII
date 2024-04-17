from django.db import models

class Reserva(models.Model):
    id = models.PositiveIntegerField(primary_key=True, unique=True)
    number = models.PositiveIntegerField(unique=True)
    
    def __str__(self):
        return "Reserva " + str(self.id) + ": assento " + str(self.number)

    class Meta: 
        db_table = "reserva"
