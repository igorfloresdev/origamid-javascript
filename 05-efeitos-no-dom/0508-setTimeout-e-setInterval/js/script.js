// Mude a cor da tela para azul e depois para vermelho a cada 2s.

// let cor = 'blue';

// setInterval(() => {
//   const html = document.querySelector('html');

//   if(cor === 'blue'){
//     cor = 'red';
//     html.style.backgroundColor = cor;
//   } else {
//     cor = 'blue';
//     html.style.backgroundColor = cor;
//   }
// }, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const time = document.querySelector('h1');
const btnInciar = document.querySelector('.btn-iniciar');
const btnPausar = document.querySelector('.btn-pausar');
let contagem = 0;


i = 1;

function iniciarContagem() {
  contagem = setInterval(conta, 1000);
  btnInciar.setAttribute('disabled', '');
}

function pausaContagem(){
  clearInterval(contagem);
  btnInciar.removeAttribute('disabled');
}

function resetaContagem(){
   i = 0;
   time.innerHTML = 0;
}

function conta(){
  time.innerHTML = i;
  i++;
}



btnInciar.addEventListener('click', iniciarContagem);
btnPausar.addEventListener('click', pausaContagem);
btnPausar.addEventListener('dblclick', resetaContagem);