const planetas = require("./planetas");
const cowsay = require("cowsay");

planetas.forEach(planeta => {
    console.log(`¡Planeta ${planeta.nombre} descubierto!`);
    console.log(`Descripción: ${planeta.descripcion}`);
    console.log(`Descubierto en: ${planeta.descubiertoEn}`);
    console.log("─".repeat(40));
});

const total = planetas.length;
console.log(
    cowsay.say({
        text: `¡Expedición completa! Planetas registrados: ${total}`,
        e: "^^",
        T: "U "
    })
);
