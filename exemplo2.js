//Imprima na tela a partir de 20 e depois de 10 em 10 até o 100, 
//mas em vez dos numeros 60 e 90 imprima a palavra "CONTINUE".

let counter = 10

while(counter < 100) {
  counter += 10
  
  if(counter === 60 || counter === 90) {
    console.log("CONTINUE")
    continue
  }

  console.log("Testando continue " + counter)
}