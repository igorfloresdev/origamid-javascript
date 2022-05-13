// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = Array.from(document.querySelectorAll(".curso"));

const listaCursos = cursos.map((item) => {
  titulo = item.querySelector("h1").innerText;
  descricao = item.querySelector("p").innerText;
  aulas = item.querySelector(".aulas").innerText;
  horas = item.querySelector(".horas").innerText;

  return {
    titulo,
    descricao,
    aulas,
    horas
  }

});

console.log(listaCursos[0].titulo);


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

// const numerosM100 = numeros.filter((numero) => {
//   return numero > 100;
// });

const numerosM100 = numeros.filter(n => n > 100);

console.log(numerosM100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const possuiBaixo = instrumentos.some(i => i === 'Baixo');

console.log(possuiBaixo);


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

valorTotal = compras.reduce((anterior, atual) => {

  valorAtual = Number(atual.preco.slice(3).replace(",", "."));
  
return valorAtual + anterior;


},0);

console.log(valorTotal);