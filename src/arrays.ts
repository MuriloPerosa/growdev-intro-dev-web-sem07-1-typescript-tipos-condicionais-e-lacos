let conhecimentos: Array<string> = ['HTML', 'JAVASCRIPT', 'PHP', 'NODE', 'TYPESCRIPT'];
let notas: Array<number> = [1,2,3,4,5,6];
let pessoas: Array<object> = [
    {
        nome: 'Murilo',
        idade: 10,
    },
    {
        nome: 'Murilo',
        idade: 10,
    }
];

console.log(conhecimentos, notas, pessoas);
console.log(typeof conhecimentos, typeof notas, typeof pessoas);

let conhecimentos2: string[] = ['HTML', 'JAVASCRIPT', 'PHP', 'NODE', 'TYPESCRIPT'];
let notas2: number[] = [1,2,3,4,5,6];
let pessoas2: object[]= [
    {
        nome: 'Murilo',
        idade: 10,
    },
    {
        nome: 'Murilo',
        idade: 10,
    }
];

console.log(conhecimentos2, notas2, pessoas2);
console.log(typeof conhecimentos2, typeof notas2, typeof pessoas2);

conhecimentos.push('CSS');

let mixto: Array<string | number | boolean> = ['minha string', 10, true, false, 'a', 50];
let mixto2: (string | number | boolean)[] = ['minha string', 10, true, false, 'a', 50];
console.log(mixto, mixto2);