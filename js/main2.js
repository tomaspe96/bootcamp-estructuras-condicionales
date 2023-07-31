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
