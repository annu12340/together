# Generated by Django 3.2.8 on 2022-05-31 18:07

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('petition', '0002_alter_petition_organiser_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='petition',
            name='images',
            field=models.CharField(default=django.utils.timezone.now, max_length=300),
            preserve_default=False,
        ),
    ]
