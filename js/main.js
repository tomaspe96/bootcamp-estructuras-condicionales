//Configuro la variable

var cantidadDeGatos = 26;


//Ejecuto

for (var i = 1; i <= cantidadDeGatos; i++) { //Repito el loop segun la cantidad de gatos

  var emoji; //Creo la variable emoji para los gatos

  if (i % 3 == 1) {         // El modulo del numero 1, 4, 7 etc va a dar siempre 1. (1+3+3+3)
    emoji = '😺';
  } else if (i % 3 == 2) {  // La segunda posicón siempre va a dar modulo 2| (2+3+3+3)
    emoji = '😸'; 
  } else {                  // Si es divisible por 3, el modulo da 0, por lo tanto el tercer gato siempre va a ser 😹 | (3+3+3+3)
    emoji = '😹';
  }

  console.log('Gato # '+ i + emoji);
}