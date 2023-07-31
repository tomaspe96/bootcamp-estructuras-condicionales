// Configuro las variables

var cantidadDeGatos = 10;
var cantidadDePasos = 2;

// Bucle FOR para recorrer la cantidad de gatos
for (var i = 1; i <= cantidadDeGatos; i++) {
  var gato = "Gato #" + i + ": ";

  // Condición para elegir entre gato normal y gato con caja

  if (i % 2 == 0) {
    gato += "🐈‍⬛ "; // Gato negro
  } else {
    gato += "🐈 "; // Gato normal
  }

  // Bucle for para recorrer la cantidad de pasos
  for (var j = 1; j <= cantidadDePasos; j++) {
    gato += "🐾";
  }

  // Mostrar el gato en la consola
  console.log(gato);
}