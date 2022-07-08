//Contando números de 1 a 50
console.log('inicio')
for (let contador = 1; contador <= 50; contador = contador + 1) {
  console.log(contador)
}
console.log('fim')



//Quando chegar no número 25 interrompa a instrução e pare o loop
for (let contador = 1; contador > 0; contador = contador + 1) {
  console.log(contador)

  if (contador === 25) {
    break
  }
}
console.log("Deu o break")

// Quando chegar no número 10 pule a instrução

for (let contador = 1; contador <= 50; contador++) {
  if (contador === 10) {
    console.log('Continue');
    continue;
  }

  console.log('Contando' + ' ' + contador);
}

