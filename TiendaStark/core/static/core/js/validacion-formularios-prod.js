// VALIDACIÓN MANTENEDOR DE PRODUCTOS //
$('#formulario').validate({ 
    "rules": {
        "id_id": {
            required: true,
        },
        "id_categoria_man": {
            required: true,
        },
        "id_nombre": {
            required: true,
            
        },
        "id_descripcion": {
            required: true,
            
        },
        "id_precio": {
            required: true,
        },
        "id_descuentoSub": {
            required: true,
            minlength : 10,
        },
        "id_descuentoOfe": {
            required: true,
            minlength : 10,
        },
    },
    messages: {
        "id_id": {
            required: 'Debe ingresar una ID válido',
        },
        "id_categoria_man": {
            required: 'Debe ingresar una categoría',
        },
        "id_nombre": {
            required: 'Debe ingresar un nombre del producto',
        },
        "id_descripcion": {
            required: 'Debe ingresar una descripción',
           
        },
        "id_precio": {
            required: 'Debe ingresar un precio',
        },
        "id_descuentoSub": {
            required: 'Debe ingresar si posee descuento o no',
            
        },
        "id_descuentoOfe": {
            required: 'Debe ingresar si posee oferta o no',
        },
    }
});



$.validator.addMethod(
    "onenumber",
    function(value, element, validate) {
        if (validate) {
            var re = new RegExp('.*[0-9999999999].*');
            resp = re.test(value);
            return resp;
        }
    },
    "La ID debe ser numerica"
);







$("#id_id").rules("add", { onenumber: true });
// $("#id_categoria_man").rules("add", { id_categoria_man: true });
// $("#id_nombre").rules("add", { id_nombre: true });
// $("#id_descripcion").rules("add", { id_descripcion: true });
// $("#id_precio").rules("add", { id_precio: true });
// $("#id_descuentoSub").rules("add", { id_descuentoSub: true });
// $("#id_descuentoOfe").rules("add", { id_descuentoOfe: true });

$('#buscarfoto').on('change', function(e) {
    let file = '../images/' + e.target.files[0].name;
    $('#fotoperfil').attr('src', file);
});