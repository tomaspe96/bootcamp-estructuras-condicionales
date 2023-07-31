var cantidadDeGatos = 26;

for (var i = 1; i <= cantidadDeGatos; i++) {

  var emoji;

  if (i % 3 == 1) {
    emoji = '😺';
  } else if (i % 3 == 2) {
    emoji = '😸';
  } else {
    emoji = '😹';
  }

  console.log(`Gato #${i}: ${emoji}`);
}



// Variables con los valores numéricos libres
var cantidadDeGatos = 50;
var cantidadDePasos = 10;

// Bucle for para recorrer la cantidad de gatos
for (var i = 1; i <= cantidadDeGatos; i++) {
  var gato = "Gato #" + i + ": 🐈 ";
  
  // Bucle for para recorrer la cantidad de pasos y agregar las patas al gato
  for (var j = 1; j <= cantidadDePasos; j++) {
    gato += "🐾";
  }

  // Mostrar el gato en la consola
  console.log(gato);
}



// Variables con los valores numéricos libres
var cantidadDeGatos = 10;
var cantidadDePasos = 2;

// Bucle for para recorrer la cantidad de gatos
for (var i = 1; i <= cantidadDeGatos; i++) {
  var gato = "Gato #" + i + ": ";

  // Condición para alternar entre gato normal y gato negro
  if (i % 2 == 0) {
    gato += "🐈‍⬛ "; // Gato negro
  } else {
    gato += "🐈 "; // Gato normal
  }

  // Bucle for para recorrer la cantidad de pasos y agregar las patas al gato
  for (var j = 1; j <= cantidadDePasos; j++) {
    gato += "🐾";
  }

  // Mostrar el gato en la consola
  console.log(gato);
}