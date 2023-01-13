const input1 = document.querySelector('#valor1');
const input2 = document.querySelector('#valor2');
const btn = document.querySelector('#btn');
const pResultado = document.querySelector('#result');
function btnOnClick(){
   const suma = +input1.value + +input2.value;
   pResultado.innerText = "Resultado x: " + suma;

};