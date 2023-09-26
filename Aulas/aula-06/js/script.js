//Gera uma tela de alerta com um botão de ok
alert("mensagem do scipt lincado");

//mensagem no console ao invés de uma tela
console.log("Mensagem de console");

//exibe mensagem e abre uma caixa de texto numa telinha
prompt("Eu sou um prompt");

//3 formas de declarar variáveis--> var, let e const
const nome = prompt("Digite seu nome:");
console.log(nome); //ou o alert

//Tipos no JS:
let idade = function () {
  console.log("Função dentro da variável");
};
idade(); //função anônoma= função sem nome

//OBJETOS:
const pessoa = {
  nome: "Mahyara",
  idade: 23,
  estaVivo: true,
};
console.log(pessoa.idade);
pessoa.idade = 24;

//ARRAY
const frutas = ["abacaxi", "maça", "laranja"];
console.log(frutas);
console.log(frutas.length); //usado para ver o tamanho no array

const misturado = [12986, true, {}, [1, true, undefined]];
console.log(misturado);
//inserir novo item no final do array
frutas.push("manga");

//retirar o ultimo elemento do array
frutas.pop();

//insere elementos no inicio do array
frutas.unshift("goiaba");

//retira elementos no inicio do array
frutas.shift();

//ESTRUTURA DE DECISÃO
// > < >= <= != ==
const minhaIdade = 23;
if (minhaIdade >= 18) {
  console.log("Maior de Idade");
} else if (minhaIdade < 0) {
  console.log("Você ainda não nasceu");
} else {
  console.log("Você é menor de Idade");
}

switch (minhaIdade) {
  case 15:
    console.log("Você é menor de Idade");
    break;

  default:
    console.log("Caso não seja nenhuma das opções anteriores");
    break;
}

//EXERCÍCIO
const num1 = parseFloat(prompt("Digite o primeiro numero:"));
console.log(num1);
const num2 = parseFloat(prompt("Digite o segundo numero:"));
console.log(num2);
media = (num1 + num2) / 2;
console.log(media);

//ESTRUTURA DE REPETIÇÃO
const numeros = [1, 2, 3, 4, 5];

for (let index = 0; index < 3; index++) {
  console.log(numeros[index]);
}

let count = 0;
while (count < 10) {
  console.log(count);
  count++;
}

//Ele faz o papel do for para a verredura do array e NÃO RETORNA NADA
//aqui eu pego o valor
numeros.forEach((item) => {
  console.log(item);
});

//aqui eu pego o valor e posição
numeros.forEach((item, index) => {
  console.log("index", index);
  console.log(item);
});

//FUNÇÃO
//void
function somar(num1, num2) {
  const soma = num1 + num2;
  console.log(soma);
}

//com retorno
function somar(num1, num2) {
  const soma = num1 + num2;
  return soma;
}

const retorno = somar(1, 2);

//Concatenar
console.log("Soma", retorno);
console.log("Soma" + retorno);
//mais indicado
console.log(`A soma de ${num1}+${num2} é igual a ${retorno}.`);

//MAP = forEach mas o retorno dele é um array
numeros.map((item, index) => {
  console.log("index", index);
  console.log(item);
  return item;
});
