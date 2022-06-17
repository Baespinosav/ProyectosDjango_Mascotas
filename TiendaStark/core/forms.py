from django import forms
from django.forms import ModelForm, fields
from .models import Usuario, Vehiculo, manBod, manProducto
from django.shortcuts import render

class VehiculoForm(ModelForm):
    class Meta:
        model = Vehiculo
        fields = ['patente', 'marca', 'modelo', 'imagen', 'categoria']

class ManProdForm(ModelForm):
    class Meta:
        model = manProducto
        fields = ['id', 'categoria_man', 'nombre', 'descripcion','precio', 'descuentoSub', 'descuentoOfe','imagen']

class UsuarioForm(ModelForm):
    class Meta:
        model = Usuario
        fields = ['id_user', 'tipo_user', 'rut', 'nombres', 'apellidos', 'direccion', 'suscripcion', 'imagen']



class ManBodForm(ModelForm):
    class Meta:
        model = manBod
        fields = ['id', 'categoria_bod', 'nombre', 'cantidad']