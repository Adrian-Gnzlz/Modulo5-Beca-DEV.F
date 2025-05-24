// LibraryManagement.js

let biblioteca = {
    "libros": [
        { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "disponible": true },
        { "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": true }
    ]
};

function leerDatos(callback) {
    setTimeout(() => {
        callback(biblioteca);
    }, 1000);
}

function mostrarLibros() {
    leerDatos((datos) => {
        console.log("\nInventario de libros:");
        datos.libros.forEach((libro, indice) => {
            console.log(`${indice + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
    });
}

function agregarLibro(titulo, autor, genero, disponible) {
    const nuevoLibro = { titulo, autor, genero, disponible };
    setTimeout(() => {
        biblioteca.libros.push(nuevoLibro);
        console.log(`\nLibro "${titulo}" agregado correctamente.`);
        mostrarLibros();
    }, 1000);
}

function actualizarDisponibilidad(titulo, nuevoEstado) {
    setTimeout(() => {
        const libro = biblioteca.libros.find(l => l.titulo === titulo);
        if (libro) {
            libro.disponible = nuevoEstado;
            console.log(`\nDisponibilidad de "${titulo}" actualizada a ${nuevoEstado ? 'Disponible' : 'Prestado'}.`);
        } else {
            console.log(`\nNo se encontró el libro con título "${titulo}".`);
        }
        mostrarLibros();
    }, 1000);
}

// Ejecución de ejemplo
mostrarLibros();
agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true);
actualizarDisponibilidad("1984", false);
