# Generated by Django 4.1a1 on 2022-06-16 19:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0007_manbod'),
    ]

    operations = [
        migrations.AlterField(
            model_name='manproducto',
            name='categoria_man',
            field=models.CharField(max_length=30, verbose_name='Categoría'),
        ),
    ]
