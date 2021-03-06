# Generated by Django 3.2.8 on 2022-05-31 07:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Campaign',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=300)),
                ('type', models.CharField(choices=[('NGO', 'NGO'), ('MEDICAL', 'Medical'), ('STARTUP', 'Startup')], default='NGO', max_length=25)),
                ('status', models.CharField(choices=[('PENDING', 'Pending'), ('IN_TRANSIT', 'In_Transit'), ('DELIVERED', 'delivered')], default='PENDING', max_length=25)),
                ('start_at', models.DateTimeField(auto_now=True)),
                ('end_date', models.DateTimeField()),
                ('target_amount', models.IntegerField()),
                ('contact_info', models.CharField(max_length=300)),
                ('organiser_id', models.IntegerField()),
            ],
        ),
    ]
