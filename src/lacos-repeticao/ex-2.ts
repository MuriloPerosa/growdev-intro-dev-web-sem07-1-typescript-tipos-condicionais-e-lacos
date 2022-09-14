// 2. Informe um valor a uma variável e 
// imprima no console se o número é primo.

let n: number = 15;


function ehPrimo (num:number) : boolean {
    for (let i = 2; i < num; i++)
    {

        if (num % i === 0) {
            return false;
        }
    }

    return num > 1;
}

console.log(ehPrimo(n));