from django.contrib import admin
from .models import Categoria, manBod, manProducto, Vehiculo, categoriaProducto, Usuario

# Register your models here.

admin.site.register(Categoria)
admin.site.register(Vehiculo)
admin.site.register(categoriaProducto)
admin.site.register(manProducto)
admin.site.register(Usuario)
admin.site.register(manBod)
