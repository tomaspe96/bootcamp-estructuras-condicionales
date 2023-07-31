// Configuro las variables
var cantidadDeGatos = 10;
var cantidadDePasos = 10;

// Bucle FOR para recorrer la cantidad de gatos
for (var i = 1; i <= cantidadDeGatos; i++) {
  var gato = "Gato #" + i + ": 🐈 ";
  
  // Bucle FOR para recorrer la cantidad de pasos
  for (var j = 1; j <= cantidadDePasos; j++) {
    gato += "🐾"; // Le sumo los pasos al gato, no lo igualo.
  }

  // Mostrar el gato y los pasos en la consola
  console.log(gato);
}
