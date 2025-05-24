const contenedorDatos = document.getElementById('contenedorDatos');
const botonFetch       = document.getElementById('botonFetch');
const botonAxios       = document.getElementById('botonAxios');

function mostrarPokemon(lista) {
    contenedorDatos.innerHTML = '';
    lista.forEach(poke => {
        const partesUrl = poke.url.split('/').filter(Boolean);
        const id        = partesUrl[partesUrl.length - 1];
        const imagenUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        const tarjeta   = document.createElement('div');
        tarjeta.className = 'pokemon';
        tarjeta.innerHTML = `
            <h3>${poke.name}</h3>
            <img src="${imagenUrl}" alt="${poke.name}">
        `;
        contenedorDatos.appendChild(tarjeta);
    });
}

async function obtenerConFetch() {
    try {
        const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
        if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);
        const datos = await respuesta.json();
        mostrarPokemon(datos.results);
    } catch (error) {
        contenedorDatos.textContent = `Error: ${error.message}`;
    }
}

async function obtenerConAxios() {
    try {
        const respuesta = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
        mostrarPokemon(respuesta.data.results);
    } catch (error) {
        contenedorDatos.textContent = `Error: ${error.message}`;
    }
}

botonFetch.addEventListener('click',  obtenerConFetch);
botonAxios.addEventListener('click', obtenerConAxios);
