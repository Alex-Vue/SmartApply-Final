# Generated by Django 3.2.13 on 2022-05-18 19:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_company'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='document',
            name='description',
        ),
    ]
