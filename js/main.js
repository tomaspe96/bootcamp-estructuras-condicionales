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