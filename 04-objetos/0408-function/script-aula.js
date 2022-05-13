// const perimetro = new Function('lado', 'return lado * 4');

// function somar(n1, n2) {
//   return n1 + n2;
// }

// console.log(somar.name);

// function darOi(nome, idade){
//   console.log('Oi para você ' + nome + idade)
// }

// darOi.call(null, 'Igor', 26);

// window.marca = 'carro';
// window.ano = '2088'

// function descricaoCarro(velocidade){
//   console.log(this);
//   console.log(this.marca + ' ' + this.ano + velocidade);
// }

// descricaoCarro.call({marca: 'Honda', ano: 2015}, 100);

// const carros = ['Ford', 'Fiat', 'VW'];
// const frutas = ['Banana', 'Uva', 'Pêra'];

// carros.forEach.call(frutas, (item) => {
//   console.log(item);
// });

// //Exemplo real

// function Dom(seletor){
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function(classe){
//   console.log(this);
//   this.element.classList.add(classe);
// }

// // const ul = new Dom('ul');

// const li = {
//   element: document.querySelector('li')
// }

// Dom.prototype.ativo.call(li, 'ativar');

// // ul.ativo.call(li, 'ativar');
// // ul.ativo('ativar')

const frutas = ['Banana', 'Pêra', 'Uva'];

Array.prototype.pop.call(frutas);

const arrayLike = {
  0: 'item 1',
  1: 'item 2',
  2: 'item 3',
  length: 3,
}

const li = document.querySelectorAll('li');

//Essa forma é utilizada quando queremos usar os metodos de um array, quando o objeto for um arrayLike

const filtro = Array.prototype.filter.bind(li, (item) =>{
  console.log(item);
  return item.classList.contains("ativo");
});

console.log(filtro);

const numeros = [3,4,6,43,2223,556,4445,665,444];

console.log(Math.max.apply(null, numeros));

const $ = document.querySelectorAll.bind(document);

const carro = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  }
}

const honda = {
  marca: 'Honda'
}

const acelerarHonda = carro.acelerar.bind(honda, 100);

console.log(acelerarHonda(20));

