// function espera(texto){
//   console.log(texto);
// }

// setTimeout(espera, 2000, 'Depois de 2 segundo');

// setTimeout(() =>{
//   console.log('teste');
// }, 5000);

// for (let i = 0; i <= 20; i++){
//   setTimeout(() => {
//     console.log(i);
//   }, 1000 * i); //multiplica o valor de de ms tempo para ser executado na ordem correta
// }

// SET INTERVAL

// function loop(texto){
//   console.log(texto);
// }

// setInterval(loop, 1000, 'passou 1 segundo');

// let i = 0;
// setInterval(() => {
//   console.log(i++);
// }, 1000)

//parar um interval

const contarAte10 = setInterval(callback, 1000);

let i = 0;
function callback(){
  console.log(i++);
  if (i > 10) {
    clearInterval(contarAte10);
  }
}