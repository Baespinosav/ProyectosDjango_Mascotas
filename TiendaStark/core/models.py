from random import choices
from django.db import models

# Create your models here.

# Create Modelo para Categoria

class Categoria(models.Model):
    idCategoria = models.IntegerField(primary_key=True, verbose_name="Id de categoría")
    nombreCategoria = models.CharField(max_length=80, blank=False, null=False, verbose_name="Nombre de la categoría")

    def __str__(self):
        return self.nombreCategoria

# Create Modelo para vehículo

class Vehiculo(models.Model):
    patente = models.CharField(max_length=6, primary_key=True, verbose_name="Patente")
    marca = models.CharField(max_length=80, blank=False, null=False, verbose_name="Marca vehículo")
    modelo = models.CharField(max_length=80, null=True, blank=True, verbose_name="Modelo")
    imagen = models.ImageField(upload_to="images/", default="sinfoto.jpg", null=False, blank=False, verbose_name="Imagen")
    categoria = models.ForeignKey(Categoria, on_delete=models.DO_NOTHING)

    def __str__(self):
        return self.patente



class categoriaProducto(models.Model):
    idCategoriaProducto = models.IntegerField(primary_key=True, verbose_name="Id de categoría Producto")
    nombreCategoriaProducto = models.CharField(max_length=8, blank=False, null=False, verbose_name="Nombre de la categoría Producto")

    def __str__(self):
        return self.nombreCategoriaProducto

class manProducto(models.Model):
    id = models.CharField(max_length=3, primary_key=True, verbose_name="ID PRODUCTO")
    categoria_man = models.CharField(max_length=30, blank=False, null=False, verbose_name="Categoría")
    nombre = models.CharField(max_length=60, blank=False, null=False, verbose_name="Nombre Producto")
    descripcion = models.CharField(max_length=250, null=True, blank=True, verbose_name="Descripción")
    precio = models.CharField(max_length=10, blank=False, null=True, verbose_name="Precio")
    descuentoSub = models.CharField(max_length=3, blank=False, null=False, verbose_name="Descuento Sub")
    descuentoOfe = models.CharField(max_length=3, blank=False, null=False, verbose_name="Descuento Oferta")
    imagen = models.ImageField(upload_to="images/", default="sinfoto.jpg", null=False, blank=False, verbose_name="Imagen")
    

    def __str__(self):
        return self.id

class Usuario(models.Model):
    id_user = models.CharField(max_length=30, primary_key=True, verbose_name="ID")
    tipo_user = models.CharField(max_length=30, blank=False, null=False, verbose_name="Tipo usuario")
    rut = models.CharField(max_length=13, blank=False, null=False, verbose_name="RUT")
    nombres = models.CharField(max_length=60, blank=False, null=False, verbose_name="Nombres")
    apellidos = models.CharField(max_length=60, blank=False, null=False, verbose_name="Apellidos")
    direccion = models.CharField(max_length=60, blank=False, null=False, verbose_name="Dirección")
    suscripcion = models.BooleanField(max_length=1, blank=False, null=False, verbose_name="Con suscripción")
    imagen = models.ImageField(upload_to="img/", default="cristian_gomez.jpg", null=False, blank=False, verbose_name="Imagen")

    def __str__(self):
        return self.id_user
    
    
    
    
class manBod(models.Model):
    id = models.CharField(max_length=3, primary_key=True, verbose_name="ID PRODUCTO")
    categoria_bod = models.CharField(max_length=30, blank=False, null=False, verbose_name="Categoria")
    nombre = models.CharField(max_length=60, blank=False, null=False, verbose_name="Nombre Producto")
    cantidad = models.CharField(max_length=250, null=True, blank=True, verbose_name="Descripción")
    

    def __str__(self):
        return self.id
