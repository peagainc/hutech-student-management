# Generated by Django 3.0.3 on 2020-04-11 06:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('employeesmanagement', '0004_auto_20200410_0828'),
    ]

    operations = [
        migrations.AlterField(
            model_name='attendance',
            name='Employee',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Employee', to='employeesmanagement.Employee'),
        ),
        migrations.AlterField(
            model_name='attendance',
            name='Location',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='employeesmanagement.Location'),
        ),
        migrations.AlterField(
            model_name='location',
            name='Latitude',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='location',
            name='Longitude',
            field=models.FloatField(blank=True, null=True),
        ),
    ]