// Crear las listas de imágenes, títulos y frases
const imagenes = [
  "assets/Paramore.png",
  "assets/Panic-at-the-Disco.jpg",
  "assets/Fall-Out-Boy.jpeg",
  "assets/Avril-Lavigne.jpeg",
];

const titulos = [
  "Emergency",
  "I Write Sins Not Tragedies",
  "The Patron Saint of Liars and Fakes",
  "Complicated",
];

const frase1 = [
  "'Cause I've seen love die, way too many times, when it deserved to be alive",
  "I chimed in with a, 'Haven't you people ever heard of closing a goddamn door?!",
  "So, when it all goes to Hell, will you be able to",
  "Why'd you have to go and make things so complicated?",
];

const frase2 = [
  "When it deserved to be alive (When it deserved to be alive)",
  "No, it's much better to face these kinds of things with a sense of poise and rationality",
  "To tell me 'sorry' with a straight face?",
  "I see the way you're actin' like you're somebody else, gets me frustrated",
];

const frase3 = [
  "And I've seen you cry Way too many times",
  "I chimed in, 'Haven't you people ever heard of closing a goddamn door?!'",
  "And when it all goes to Hell, will you be able to",
  "Life's like this, you... You fall, and you crawl, and you break",
];

const frase4 = [
  "When you deserved to be alive Alive...",
  "No, it's much better to face these kinds of things with a sense of...",
  "Tell me 'sorry' with a straight face? (Let's go)...",
  "And you take what you get and you turn it into honesty And promise me, I'm never gonna find you fake it. No, no, no...",
];

// Trae los elementos del HTML que tienen ese id
const imagen = document.getElementById("foto");
const titulo = document.getElementById("titulo1");
const prediccion = document.getElementById("prediccion1");
const boton = document.getElementById("boton");

// Función para generar un número aleatorio entre un valor mínimo y un máximo
function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min - 1);
}

function generarPrediccion() {
  // Para elegir la misma posición en todas las listas, generar un solo número aleatorio
  const indice = numeroRandom(0, frase1.length); // 0, 1, 2, 3

  // Para elegir la distintos elementos (posiciones) en cada lista, generar distintos números aleatorios
  const indiceTitulo = numeroRandom(0, titulos.length);
  const indiceImagen = numeroRandom(0, imagenes.length);
  
  // Un número aleatorio por cada frase o verso que quieran agregar al texto
  const indiceFraseA = numeroRandom(0, frase1.length);
  const indiceFraseB = numeroRandom(0, frase2.length);
  const indiceFraseC = numeroRandom(0, frase3.length);
  const indiceFraseD = numeroRandom(0, frase4.length);
  
  // Reemplaza el texto del elemento 'titulo' por un título de la lista de títulos elegido aleatoriamente
  titulo.innerText = titulos[indiceTitulo]; // Entre los [] se pasa el número aleatorio generado arriba

  // Reemplaza la imagen del elemento 'imagen' por una elegida aleatoriamente
  imagen.src = imagenes[indiceImagen];

  // Reemplaza el texto del elemento 'predicción' por las frases elegidas aleatoriamente
  prediccion.innerHTML = `<p>${frase1[indiceFraseA]}</p> <p>${frase2[indiceFraseB]}</p> <p>${frase3[indiceFraseC]}</p> <p>${frase4[indiceFraseD]}</p>`;
  
}

// Ejecuta la función generarPoema() cada vez que hago click en el botón
boton.addEventListener("click", function () {
  generarPrediccion();
});

generarPrediccion();