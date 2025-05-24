const listaPedidos = document.getElementById('listaPedidos');
const botonAgregarPedido = document.getElementById('botonAgregarPedido');

let idPedido = 1;

botonAgregarPedido.addEventListener('click', () => {
    const pedido = { id: idPedido++, estado: 'En Proceso' };
    agregarPedido(pedido);
    procesarPedido(pedido);
});

function agregarPedido(pedido) {
    const elemento = document.createElement('li');
    elemento.id = `pedido-${pedido.id}`;
    elemento.textContent = `Pedido #${pedido.id}: ${pedido.estado}`;
    listaPedidos.appendChild(elemento);
}

function actualizarEstadoPedido(pedido, nuevoEstado) {
    const elemento = document.getElementById(`pedido-${pedido.id}`);
    if (elemento) {
        elemento.textContent = `Pedido #${pedido.id}: ${nuevoEstado}`;
    }
}

async function procesarPedido(pedido) {
    const tiempoAleatorio = Math.floor(Math.random() * 3000) + 2000;
    await new Promise(resolve => setTimeout(resolve, tiempoAleatorio));
    actualizarEstadoPedido(pedido, 'Completado');
}
