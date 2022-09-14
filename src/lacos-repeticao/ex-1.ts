// 1. Faça um algoritmo que armazene um número e imprima os números 
// ímpares entre 1 e o número armazenado.

let numero: number = 15;

for (let i:number = 2; i < numero; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
