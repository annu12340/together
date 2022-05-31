from django.db import models
from django.contrib.auth import get_user_model


# Create your models here.


class Petition(models.Model):

    STATUS = (
        ('PENDING', 'Pending'),
        ('IN_TRANSIT', 'In_Transit'),
        ('DELIVERED', 'delivered')
    )

    name = models.CharField(max_length=40)
    description = models.CharField(max_length=300)
    status = models.CharField(
        max_length=25, choices=STATUS, default=STATUS[0][0])

    start_at = models.DateTimeField(auto_now=True)
    end_date = models.DateTimeField()
    target_signature_counter = models.IntegerField()

    contact_info = models.CharField(max_length=300)
    organiser_id = models.IntegerField()

    def __str__(self):
        return f"<Petition {self.name} created on {self.start_at}>"
