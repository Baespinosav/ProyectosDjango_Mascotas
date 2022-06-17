$('#registro').validate({ 
    "rules": {
        "rut": {
            required: true,
        },
        "nombres": {
            required: true,
        },
        "apellidos": {
            required: true,
        },
        "correo": {
            required: true,
            email: true,
        },
        "direccion": {
            required: true,
        },
        "password": {
            required: true,
            minlength : 10,
        },
        "password2": {
            required: true,
            minlength : 10,
            equalTo : "#password",
        },
    },
    messages: {
        "rut": {
            required: 'Debe ingresar un RUT válido',
        },
        "nombres": {
            required: 'Debe ingresar sus nombres',
        },
        "apellidos": {
            required: 'Debe ingresar sus apellidos',
        },
        "correo": {
            required: 'Debe ingresar su correo electrónico',
            email: 'Formato de correo incorrecto'
        },
        "direccion": {
            required: 'Debe ingresar su dirección',
        },
        "password": {
            required: 'Debe ingresar una password',
            minlength: 'La mínima cantidad de caracteres de la contraseña es 10',
        },
        "password2": {
            required: 'Debe repetir la misma password',
            minlength: 'La mínima cantidad de caracteres de la contraseña es 10',
            equalTo: 'La repetición de contraseña debe coincidir con la contraseña original',
        },
    }
});


// VALIDACIÓN MANTENEDOR DE USUARIOS //
$('#formulario').validate({ 
    "rules": {
        "id_id_user": {
            required: true,
        },
        "id_tipo_user": {
            required: true,
        },
        "id_rut": {
            required: true,
            
        },
        "id_nombres": {
            required: true,
            
        },
        "id_apellidos": {
            required: true,
        },
        "id_direccion": {
            required: true,
            minlength : 10,
        },
    },
    messages: {
        "id_id_user": {
            required: 'Debe ingresar un RUT válido',
        },
        "id_tipo_user": {
            required: 'Debe ingresar sus nombres',
        },
        "id_rut": {
            required: 'Debe ingresar sus apellidos',
        },
        "id_nombres": {
            required: 'Debe ingresar su correo electrónico',
            email: 'Formato de correo incorrecto'
        },
        "id_apellidos": {
            required: 'Debe ingresar su dirección',
        },
        "id_direccion": {
            required: 'Debe ingresar una password',
            minlength: 'La mínima cantidad de caracteres de la contraseña es 10',
        },
    }
});


function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Valida el rut con su cadena completa "XXXXXXXX-X"
function validateRut(rutCompleto) {
    if (!/^[0-9]+-[0-9kK]{1}$/.test(rutCompleto))
        return false;
    var tmp = rutCompleto.split('-');
    var rut = tmp[0];
    var digv = tmp[1]; 
    if (digv == 'k') digv = 'K' ;
    return (dv(rut) == digv );
}

function dv(T) {
    var M=0,S=1;
    for(; T; T = Math.floor(T/10))
        S=(S + T % 10 * (9 - M++ %6))%11;
    return S?S-1:'k';
}

// Uso de la función validateRut
// alert( Fn.validateRut('16560241-2') ? 'válido' : 'inválido');

$.validator.addMethod(
    "validateemail",
    function(value, element, validate) {
        debugger
        if (validate) {
            return validateEmail(value);
        }
    },
    "Formato de correo incorrecto"
);

$.validator.addMethod(
    "onenumber",
    function(value, element, validate) {
        if (validate) {
            var re = new RegExp('.*[0-9].*');
            resp = re.test(value);
            return resp;
        }
    },
    "La contraseña debe contener al menos un número"
);

$.validator.addMethod(
    "onemayus",
    function(value, element, validate) {
        if (validate) {
            var re = new RegExp('.*[A-Z].*');
            resp = re.test(value);
            return resp;
        }
    },
    "La contraseña debe contener al menos una mayúscula"
);

$.validator.addMethod(
    "rut",
    function(value, element, validate) {
        if (validate) {
            return validateRut(value);
        }
    },
    "El formato del rut no es válido"
);

$("#rut").rules("add", { rut: true });
$("#correo").rules("add", { validateemail: true });
$("#password").rules("add", { onenumber: true });
$("#password").rules("add", { onemayus: true });
$("#id_rut").rules("add", { rut: true });

$('#buscarfoto').on('change', function(e) {
    let file = '../images/' + e.target.files[0].name;
    $('#fotoperfil').attr('src', file);
});






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
$("#id_categoria_man").rules("add", { id_categoria_man: true });
$("#id_nombre").rules("add", { id_nombre: true });
$("#id_descripcion").rules("add", { id_descripcion: true });
$("#id_precio").rules("add", { id_precio: true });
$("#id_descuentoSub").rules("add", { id_descuentoSub: true });
$("#id_descuentoOfe").rules("add", { id_descuentoOfe: true });

$('#buscarfoto').on('change', function(e) {
    let file = '../images/' + e.target.files[0].name;
    $('#fotoperfil').attr('src', file);
});