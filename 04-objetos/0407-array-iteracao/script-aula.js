// const carros = ["Ford", "Fiat", "Honda"];

// carros.forEach((item, index, array) => {
//   console.log(item.toUpperCase(), index, array);
// });

// console.log(carros);

// const li = document.querySelectorAll('li');

// const retornoForeach = li.forEach((item,index,array) => {item.classList.add('ativa')});

// console.log(retornoForeach);

// const carros = ["Ford", "Fiat", "Honda"];

// const novaArray = carros.map((item, index, array) => {
//   return item.toUpperCase();
// });

// const numeros = [2, 4, 5, 6, 78];
// const numerosX2 = numeros.map(n => n * 2);

// console.log(numerosX2);

// console.log(novaArray);
// console.log(carros);

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   },
// ]

// const tempoAulas = aulas.map(aula => aula.min);


// // É o mesmo que fazer a arrow function acima
// const arrayNomeAulas = aulas.map(function (aula){
//   return aula.nome;
// });

// console.log(arrayNomeAulas);
// console.log(tempoAulas);

// const aulas = [10, 25, 30];

// const reduceAulas = aulas.reduce((acumulador, item) =>{
//   console.log(acumulador, item,);
//   return acumulador + item;
// }, 0);

// //Se não passar o valor do acumulador (no exemplo acima é o 0), o mesmo pula a primeira iteração e o primeiro valor de acumulador assume o valor do item.

// console.log(reduceAulas);

// const numeros = [10, 25, 30, 3, 54, 33, 22];

// const maiorNumero = numeros.reduce((anterior, atual) => anterior > atual ? anterior : atual, 0)

// console.log(maiorNumero);

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   },
// ]


// const listaAulas = aulas.reduce((acumulador, atual, index) => {
//   acumulador[index] = atual.nome;
//   return acumulador;
// }, {})

const frutas = ['Banana', 'Pêra', 'Uvas'];

//verifica se algum (some) do item existe for true no array e retorna true
// const temUva = frutas.some((item) =>{
//   console.log(item);
//   return item === 'Uva';
// });


// console.log(temUva);

//verifica se todos (every) os itens são true retorna true

const every = frutas.every((fruta) => {
  return fruta;
});

const indexUva = frutas.findIndex(item => {
  return item === 'Uvas'
});

console.log(indexUva);

console.log(every);

const numeros = [6, 43, 22, 88, 101, 29];

const maiorQue3 = numeros.every(n => n > 3);
//Verifica se os numeros são maior que 3 se TODOS (every) forem retorna true se não false

console.log(maiorQue3);

const frutas1 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];

//retorna apenas o que for true no array
const arrayFrutas = frutas1.filter((item) =>{
  console.log(item);
  return item;
});

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]


console.log(arrayFrutas);

const maiores15 = aulas.filter((aula) =>{
  console.log(aula.min);
  return aula.min >= 15;
});

console.log(maiores15);



