//Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10.

function tabuada(num) {
    for (let contador = 1; contador < 11; contador ++){
        let multiplicacao = num * contador;
        let result = console.log(`${num} x  ${contador} = ${multiplicacao}`)
    }
    return 'Funcionou'
}
console.log(tabuada(1))