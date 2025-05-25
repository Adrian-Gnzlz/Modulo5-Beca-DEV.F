const { z } = window.Zod;

const esquemaRegistro = z.object({
    nombre: z.string().trim().nonempty({ message: 'El nombre es obligatorio' }),
    correo: z.string().trim().email({ message: 'Correo inválido' }),
    contraseña: z.string().min(6, { message: 'La contraseña requiere 6 caracteres como mínimo' })
});

const formulario = document.getElementById('formularioRegistro');
const erroresElemento = document.getElementById('errores');

function mostrarErrores(resultado){
    if(resultado.success){
        erroresElemento.textContent = '';
    }else{
        const mensajes = resultado.error.errors.map(e => e.message);
        erroresElemento.textContent = mensajes.join(', ');
    }
}

function validarEnTiempoReal(){
    const datos = {
        nombre: document.getElementById('nombre').value,
        correo: document.getElementById('correo').value,
        contraseña: document.getElementById('contraseña').value
    };
    const resultado = esquemaRegistro.safeParse(datos);
    mostrarErrores(resultado);
    }

    ['nombre','correo','contraseña'].forEach(id=>{
    document.getElementById(id).addEventListener('input', validarEnTiempoReal);
    });

    formulario.addEventListener('submit', e=>{
    e.preventDefault();
    const datos = {
        nombre: document.getElementById('nombre').value,
        correo: document.getElementById('correo').value,
        contraseña: document.getElementById('contraseña').value
    };
    try{
        esquemaRegistro.parse(datos);
        alert('¡Registro exitoso!');
        erroresElemento.textContent = '';
        formulario.reset();
    }catch(error){
        erroresElemento.textContent = error.errors.map(e=>e.message).join(', ');
    }
});
