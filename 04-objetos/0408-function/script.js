// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce


// const paragrafos = Array.from(document.querySelectorAll("p"));

// totalChar = paragrafos.reduce((acumulador, atual) => {
//   acumulador = atual.innerText.length + acumulador;
//   return acumulador;
// },0);

// console.log(totalChar);

// -------------------- USANDO CALL -----------------
const paragrafos = document.querySelectorAll("p");

totalChar = Array.prototype.reduce.call(paragrafos,(acumulador, atual) => {
  return acumulador + atual.innerText.length;
  
},0);

console.log(totalChar);



// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

const criarElementos = (tag, classe, conteudo) =>{
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  classe ? elemento.innerHTML = conteudo : null;
  return elemento;
};

console.log(criarElementos("h1", "azul", "Esse é o conteudo"));


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const criarTitulo = criarElementos.bind(null, "h1", "titulo");

console.log(criarTitulo("Esse é um titulo"));