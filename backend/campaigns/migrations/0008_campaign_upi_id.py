# Generated by Django 3.2.8 on 2022-06-05 19:31

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('campaigns', '0007_auto_20220606_0045'),
    ]

    operations = [
        migrations.AddField(
            model_name='campaign',
            name='upi_id',
            field=models.CharField(default=django.utils.timezone.now, max_length=100),
            preserve_default=False,
        ),
    ]
