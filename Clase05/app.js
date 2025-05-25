const formulario = document.getElementById('formularioRegistro');

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const interesesMarcados = document.querySelectorAll('input[name="intereses"]:checked');
    const horarioSeleccionado = document.querySelector('input[name="horario"]:checked');
    const fechaEvento = document.getElementById('fecha').value;
    const horaEvento = document.getElementById('hora').value;
    const archivo = document.getElementById('archivo').files[0];

    const regexNombre = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]{2,}$/;
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexTelefono = /^\d{10}$/;

    if(!regexNombre.test(nombre)){
        alert('Ingresa un nombre válido (mínimo 2 letras).');
        return;
    }

    if(!regexCorreo.test(correo)){
        alert('Ingresa un correo electrónico válido.');
        return;
    }

    if(!regexTelefono.test(telefono)){
        alert('Ingresa un teléfono de 10 dígitos sin espacios.');
        return;
    }

    if(interesesMarcados.length===0){
        alert('Selecciona al menos un interés.');
        return;
    }

    if(!horarioSeleccionado){
        alert('Elige un horario preferido.');
        return;
    }

    const hoy = new Date().setHours(0,0,0,0);
    const fechaSeleccionada = new Date(fechaEvento).setHours(0,0,0,0);

    if(fechaSeleccionada < hoy){
        alert('La fecha del evento debe ser hoy o una fecha futura.');
        return;
    }

    if(archivo){
        const extensionesPermitidas = ['application/pdf','image/png','image/jpeg'];
        if(!extensionesPermitidas.includes(archivo.type)){
        alert('El archivo debe ser PDF, PNG o JPG.');
        return;
        }
        if(archivo.size > 2*1024*1024){
        alert('El archivo no debe superar 2 MB.');
        return;
        }
    }

    alert(`Registro exitoso.\n¡Gracias por registrarte, ${nombre}!`);
    formulario.reset();
});
