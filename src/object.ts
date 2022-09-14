let pessoa: object = {
    nome: 'Murilo',
    idade: 24,
    tarefas: []
};

interface Pessoa {
    nome: string,
    idade: number,
    tarefas?: string[] // opcional
} 

let pessoa2: Pessoa = {
    nome: 'Murilo',
    idade: 24,
    tarefas: []
};

let pessoa3: Pessoa = {
    nome: 'Murilo',
    idade: 24,
};


console.log(pessoa, typeof pessoa);