import './style.css';

let numeroSecreto;
let intentosRestantes;
const inputNumero   = document.getElementById('numero');
const botonAdivinar = document.getElementById('adivinar');
const botonReiniciar= document.getElementById('reiniciar');
const mensaje       = document.getElementById('mensaje');
const intentosTexto = document.getElementById('intentos');

function iniciarJuego() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    intentosRestantes = 10;
    mensaje.textContent = '';
    intentosTexto.textContent = `Intentos restantes: ${intentosRestantes}`;
    inputNumero.value = '';
    inputNumero.disabled = false;
    botonAdivinar.disabled = false;
}

function procesarIntento() {
    const numeroJugador = parseInt(inputNumero.value, 10);

    if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
        mensaje.textContent = 'Ingresa un número válido entre 1 y 100.';
        return;
    }

    intentosRestantes--;
    if (numeroJugador === numeroSecreto) {
        mensaje.textContent = '¡Felicidades! ¡Adivinaste el número!';
        finalizarJuego();
    } else if (intentosRestantes === 0) {
        mensaje.textContent = `Sin intentos. El número era ${numeroSecreto}.`;
        finalizarJuego();
    } else {
        mensaje.textContent = numeroJugador < numeroSecreto
            ? 'El número es más alto.'
            : 'El número es más bajo.';
        intentosTexto.textContent = `Intentos restantes: ${intentosRestantes}`;
        inputNumero.value = '';
        inputNumero.focus();
    }
}

function finalizarJuego() {
    botonAdivinar.disabled = true;
    inputNumero.disabled = true;
    intentosTexto.textContent = '';
}

botonAdivinar.addEventListener('click', procesarIntento);
botonReiniciar.addEventListener('click', iniciarJuego);

iniciarJuego();
