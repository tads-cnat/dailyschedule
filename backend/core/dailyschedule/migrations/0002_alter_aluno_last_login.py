# Generated by Django 4.1.4 on 2023-11-14 12:35

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('dailyschedule', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='aluno',
            name='last_login',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
