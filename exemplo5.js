//Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo: 3! = 3 * 2 * 1 // 6

function encontraFatorial(numero) {
    let fat = 1
     for (  let i=1; i<= numero; i++){
         fat = fat * i
     }
     return (`O fatorial de ${numero} é ${fat}`)
 }
 console.log(encontraFatorial(4))