from django.db import models


# Create your models here.


class Campaign(models.Model):

    STATUS = (
        ('PENDING', 'Pending'),
        ('IN_TRANSIT', 'In_Transit'),
        ('DELIVERED', 'delivered')
    )

    TYPE = (
        ('NGO', 'NGO'),
        ('MEDICAL', 'Medical'),
        ('STARTUP', 'Startup'),
    )

    name = models.CharField(max_length=100)
    images = models.CharField(max_length=300)
    description = models.CharField(max_length=300)
    type = models.CharField(
        max_length=25, choices=TYPE, default=TYPE[0][0])
    status = models.CharField(
        max_length=25, choices=STATUS, default=STATUS[0][0])

    start_at = models.DateTimeField(auto_now=True)
    end_date = models.DateTimeField()
    target_amount = models.IntegerField()
    likes=models.IntegerField(default=0)
    contact_info = models.CharField(max_length=300)
    organiser_id = models.IntegerField()

    def __str__(self):
        return f" {self.name} "
