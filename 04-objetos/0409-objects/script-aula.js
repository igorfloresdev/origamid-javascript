// const pessoa = new Object({
//   nome: 'Igor'
// })

// console.log(pessoa.nome);

// const carro = {
//   rodas: 4,
//   init(valor){
//     this.marca = valor;
//     return this;
//   },

//   acelerar(){
//     return this.marca + ' Acelerou';
//   },

//   buzinou(){
//     return this.marca + ' Buzinou';
//   }
// }

// const honda = Object.create(carro).init('honda');
// console.log(honda.acelerar());

// const ferrari = Object.create(carro).init('Ferrari');
// console.log(ferrari.acelerar());


// const funcaoAutomovel = {
//   acelerar() {
//     return 'acelerou';
//   },
//   buzinar() {
//     return 'buzinou';
//   },
// }

// const moto = {
//   rodas: 2,
//   capacete: true,
// }

// Object.assign(moto, funcaoAutomovel);

// console.log(moto);

// const moto = {
//   capacete: true,
// }


// Object.defineProperties(moto,{
//   rodas: {
//     enumerable: true,
//     get(){
//       return this._rodas;
//     },
//     set(valor){
//       this._rodas = valor * 4 + 'Total Rodas';
//     }
//   }
// });

// console.log(moto);

// const innerHeightConfig = Object.getOwnPropertyDescriptor(window, 'innerHeight');

// Object.getOwnPropertyNames(Array.prototype);

// const frutas = ["Banana"];

// console.log(Object.getPrototypeOf(frutas));
// console.log(Object.getPrototypeOf(Array.prototype));


// const frutas1 = ['Banana', 'Pêra'];
// const frutas2 = ['Banana', 'Pêra'];

// console.log(Object.is(frutas1, frutas2)); // false

// const novasFrutas = frutas1;

// novasFrutas[0] = 'Uva';
// console.log(frutas1[0]);

// console.log(Object.is(novasFrutas, frutas1));

// const carro = {
//   marca: 'Ford',
//   ano: 2018,
// }

// Object.seal(carro);
// carro.portas = 4;
// delete carro.marca;

// carro.marca = "honda";


// console.log(carro);

// console.log(Object.isSealed(carro));

const frutas = ['banana', 'Uva'];
const frase = 'Oi frase';
const somar = function(a, b){
  return a + b
}

const carro = {
  marca: 'ford'
}

console.log(frutas.toString());

console.log(Object.prototype.toString.call(somar));

