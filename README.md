# BIENVENIDO A MI REPOSITORIO
## Repositorio del Módulo 5 de la beca "DEV.F"

El actual repositorio se ha dividido de tal manera que sea sencillo el tránsito entre sus apartados.
Estos apartados corresponden a las clases que se han tenido durante el Módulo 5, las cuales serán almacenadas en carpetas con sus respectivos nombres descriptivos:
- Clase01, Clase02, Clase03,...

### Clase01: Event Loopp y Asincronicidad.
> # Explicacion:
> Se desarrolló un proyecto web compuesto por index.html, app.js y style.css que simula el flujo de pedidos de una cafetería: al presionar el botón “Agregar Pedido”, la aplicación genera un identificador único para cada pedido, lo muestra de inmediato en la interfaz con el estado “En Proceso” y, tras un intervalo aleatorio controlado con setTimeout, actualiza el estado a “Completado”; toda esta lógica se estructuró mediante Promises y se orquestó con async/await, separando funciones para la creación de pedidos, la actualización visual y la simulación de preparación, lo que permitió ilustrar claramente el funcionamiento del Event Loop y las técnicas modernas de asincronía en JavaScript; además, se aplicó un diseño modular y estilos sencillos para una presentación limpia


### Clase02: Callbacks and JSON.
> # Explicacion:
> Se construyó una aplicación de consola en Node.js que administra el inventario de una biblioteca manteniendo los datos en un objeto JSON en memoria; se creó la colección inicial con libros y propiedades titulo, autor, genero y disponible, y se implementaron cuatro funciones: leerDatos, que devuelve el inventario tras 1 s usando callbacks para simular la lectura asincrónica de un archivo; mostrarLibros, que lista los títulos con su disponibilidad; agregarLibro, que inserta un nuevo objeto en el arreglo y confirma la operación tras otro retardo programado; y actualizarDisponibilidad, que localiza un libro por título y alterna su estado entre “Disponible” y “Prestado”; cada operación encadena el callback de lectura para refrescar el inventario en consola, de forma que el flujo refleja claramente la asincronía basada en callbacks mientras demuestra el uso práctico de JSON como formato ligero de almacenamiento.


### Clase03: Fetch y Axios.
> # Explicacion:
> Se construyó una aplicación web compuesta por index.html, app.js y style.css que consume la PokéAPI para comparar el uso de fetch y Axios: la interfaz muestra dos botones—“Obtener con fetch” y “Obtener con Axios”—que, al presionarse, disparan llamadas HTTP al endpoint https://pokeapi.co/api/v2/pokemon?limit=10; cada respuesta se procesa y se renderiza dinámicamente en un contenedor tipo cuadrícula, donde se presenta el nombre y el sprite de los diez primeros Pokémon; los datos solicitados con fetch se gestionan mediante async/await, validando el estado ok y capturando errores con un bloque try/catch, mientras que la ruta Axios emplea axios.get y maneja errores del mismo modo; ambas rutas reutilizan la función mostrarPokemon que limpia el contenedor y crea tarjetas HTML con el nombre y la imagen de cada criatura; el estilo aplica una paleta inspirada en la Pokédex, con botones en amarillo, encabezado azul y tarjetas con sombra suave, y se asegura responsividad mediante una cuadrícula auto-fill; en conjunto, el proyecto demuestra la obtención y representación de datos desde una API pública, el manejo de errores y la comparación práctica entre fetch y Axios en un entorno claro y modular.

### Clase04: Promesas y Async/Await
> # Explicacion:
> Se desarrolló una aplicación web de reservas compuesta por index.html, app.js y style.css que implementa por completo un sistema de reservas para restaurante gestionado con promesas y async/await: al enviar el formulario, la función principal hacerReserva valida primero la disponibilidad a través de verificarDisponibilidad, que resuelve o rechaza según si las mesas solicitadas (campo numérico del formulario) no superan las 10 disponibles definidas en el modelo de datosapp; si la promesa se satisface, se invoca enviarConfirmacionReserva, que espera un segundo para “enviar” el correo y, con probabilidad del 70 %, confirma la operación o, de lo contrario, genera un fallo simuladoapp; ambos pasos se orquestan con await dentro de un bloque try…catch, de modo que cualquier error (falta de mesas o fallo en el correo) se captura y se muestra en el elemento #resultado de la interfaz HTML, proporcionando retroalimentación clara al usuario; la interfaz presenta un formulario minimalista centrado en pantalla y estilizado con paleta morado-blanco, botones interactivos y mensajes resaltados, garantizando legibilidad y experiencia fluida en escritorio y móvil.

### Clase05: Manejo de formularios.
> # Explicacion:
> Se diseñó un módulo web completo—index.html, style.css y app.js—que digitaliza el registro de asistentes a eventos mediante un formulario elegante y 100 % validado: la interfaz HTML reúne campos de nombre, correo, teléfono, fecha, hora, casillas de intereses, radios de horario y subida opcional de documento, presentados dentro de una tarjeta central responsiva de 600 px con estilo limpio, sombreado y gradiente de fondo; la lógica en app.js intercepta el envío, aplica expresiones regulares para nombre (mínimo dos letras), correo (formato estándar) y teléfono (diez dígitos) y exige al menos un interés y un horario seleccionados; también comprueba que la fecha no sea pasada y que, si se adjunta archivo, sea PDF/PNG/JPG y pese menos de 2 MB, todo ello encapsulado en alertas personalizadas que bloquean el envío hasta cumplir los requisitos; tras superar las nueve validaciones totales, el sistema confirma alta exitosa y restablece el formulario, garantizando así una experiencia fluida, segura y preparada para integrarse con cualquier backend.

### Clase06: Validación de formularios con Zod.
> # Explicacion:
> Se construyó un formulario de registro completo empleando index.html, style.css y validacion.js que valida los campos con la biblioteca Zod; la página define los inputs de nombre, correo y contraseña, enlaza la hoja de estilos y carga Zod desde CDN, mientras que el JavaScript crea un esquema z.object con reglas de obligatoriedad, formato de email y longitud mínima de contraseña, activa validación en tiempo real mediante eventos input, muestra mensajes de error agregados en un párrafo dedicado y, al enviar, utiliza parse para bloquear el envío si la validación falla, mostrando alertas de éxito y reiniciando el formulario cuando todo es correcto; el estilo centraliza el formulario, aplica tipografía uniforme y colores de acento azul para el botón, garantizando una experiencia clara, reactiva y lista para integrarse con cualquier backend.

### Clase07: Intro a Node.js y npm.
> # Explicacion:
> Se configuró un proyecto Node.js desde cero con package.json, se añadió el script "explorar": "node index.js" y la dependencia cowsay; el módulo planetas.js exporta un arreglo de objetos que describen tres mundos (Titán, Próxima Centauri b y TRAPPIST-1e) con nombre, descripción y año de descubrimientoplanetas; el archivo index.js importa esa lista, recorre cada entrada para imprimir en consola los datos formateados, traza un separador y, al final, muestra un resumen animado con cowsay indicando el total de planetas registrados, demostrando el uso de módulos CommonJS, dependencias externas y scripts npm para automatizar tareas.

### Clase08: PROYECTO FINAL (Intro a Vite).
> # Explicacion:
> Se levantó un proyecto con Vite que incluye index.html, main.js y style.css, donde se implementa un juego “Adivina el número”: al iniciar, el script genera un número secreto del 1 al 100 y muestra al usuario un input numérico con los botones Adivinar y Reiniciar; cada vez que el jugador introduce un valor y pulsa Adivinar, la aplicación indica si el número oculto es mayor o menor, decrementa un contador de intentos y, tras diez fallos, bloquea el juego y revela la solución; el botón Reiniciar restablece la partida sin recargar la página, generando un nuevo número y reactivando los controles; todo el flujo se escribió en módulo ES (type="module") aprovechando el servidor de desarrollo de Vite (npm run dev, por defecto en http://localhost:5173) que recarga al guardar, aunque no abre el navegador automáticamente—basta con copiar la URL mostrada en la terminal; los estilos centran el contenido, aplican botones de colores y una tipografía limpia, garantizando una experiencia ligera y responsiva.



<p align="right">
    <strong style = "font-size: 35px">Autor:</strong><br>
    Oscar Adrián González Javalera
</p>
