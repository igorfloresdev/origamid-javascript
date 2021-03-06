// Crie uma função que verifique
// corretamente o tipo de dado

const tipoDado = ((dado) =>{
  return Object.prototype.toString.call(dado);
});

console.log(tipoDado([]));

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {
  lados: 4
}

Object.defineProperties(quadrado,{
  lados:{
    writable: false
  }
});

quadrado.lados = 5;

console.log(quadrado);

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao);

configuracao.width = 100;

console.log(configuracao);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyNames(Array.prototype));
console.log(Object.getOwnPropertyNames(String.prototype));