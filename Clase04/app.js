const mesasDisponibles = 10;

function verificarDisponibilidad(mesasSolicitadas) {
    return new Promise((resolver, rechazar) => {
        if (mesasSolicitadas <= mesasDisponibles) {
        resolver();
        } else {
        rechazar('No hay mesas suficientes para esa reserva');
        }
    });
}

function enviarConfirmacionReserva(nombreCliente) {
    return new Promise((resolver, rechazar) => {
        setTimeout(() => {
        if (Math.random() > 0.3) {
            resolver(`Correo de confirmación enviado a ${nombreCliente}`);
        } else {
            rechazar('Fallo al enviar el correo de confirmación');
        }
        }, 1000);
    });
}

async function hacerReserva(nombreCliente, mesasSolicitadas) {
    try {
        await verificarDisponibilidad(mesasSolicitadas);
        const resultadoEnvio = await enviarConfirmacionReserva(nombreCliente);
        mostrarResultado(`Reserva confirmada para ${nombreCliente}. ${resultadoEnvio}`);
    } catch (error) {
        mostrarResultado(`Error en la reserva: ${error}`);
    }
}

const formulario = document.getElementById('formulario-reserva');
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nombreCliente = document.getElementById('nombre-cliente').value.trim();
    const mesasSolicitadas = Number(document.getElementById('mesas-solicitadas').value);
    hacerReserva(nombreCliente, mesasSolicitadas);
});

function mostrarResultado(mensaje) {
    document.getElementById('resultado').textContent = mensaje;
}
