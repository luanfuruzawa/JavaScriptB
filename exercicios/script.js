//1 - soma Simples
function somar() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  document.getElementById("resultado1").innerText = ("Resultado: " + (num1 + num2));
}
//2 - verificar idade

function verificarIdade() {
  let idade = Number(document.getElementById("idade").value);
  if (idade >= 18) {
    document.getElementById("resultado2").innerText = ("Você é maior de idade");
  } else {
    document.getElementById("resultado2").innerText = ("Você é menor de idade");
  }
}
//3 - contar caracteres

function verificarNumCaracter() {
  let frase = document.getElementById("frase").value;
  let caracteresFrase = frase.length;
  document.getElementById("resultado3").innerText = ("Número de caracteres: " + caracteresFrase);
}

//4 - verificar se o numero é par ou impar
function verificarNumeroPar() {
  let numero = Number(document.getElementById("parOuImpar").value);
  let resultado;

  if (numero % 2 === 0) {
    resultado = "É par.";
  } else {
    resultado = "É ímpar.";
  }

  document.getElementById("resultado4").innerText = resultado;
}
//5 - deixar em caixa alta
function caixaAlta() {
  let nome = document.getElementById("nome").value;
  document.getElementById("resultado5").innerText = nome.toUpperCase();
}
//6 - comparar numeros
function compararNumeros() {
  const numero1 = +document.getElementById("numero1").value;
  const numero2 = +document.getElementById("numero2").value;

  if (numero1 === numero2) {
    document.getElementById("resultado6").innerText = "Os dois números são iguais.";
  } else if (numero1 > numero2) {
    document.getElementById("resultado6").innerText = "Maior: " + numero1;
  } else {
    document.getElementById("resultado6").innerText = "Maior: " + numero2;
  }
}
//6 - gerar tabuada
function gerarTabuada() {
  var numero = parseInt(document.getElementById("numeroTabuada").value);
  var resultado = "";
  var i = 1;

  while (i <= 10) {
    resultado = resultado + numero + " x " + i + " = " + (numero * i) + "<br>";
    i = i + 1;
  }

  document.getElementById("resultado7").innerHTML = resultado;
}
//7 - contar
function contar() {
  let resultado = "";
  for (let i = 1; i <= 10; i++) {
    resultado += i + " ";
  }
  document.getElementById("resultado8").innerText = resultado;
}
// 8 calcular media
function calcularMedia() {
  let numero1 = Number(document.getElementById("nota1").value);
  let numero2 = Number(document.getElementById("nota2").value);
  let numero3 = Number(document.getElementById("nota3").value);
  let media = ((numero1 + numero2 + numero3) / 3).toFixed(2);
  let status = media >= 6 ? "Aprovado!" : "Reprovado.";
  document.getElementById("resultado9").innerText = `${status} Média: ${media}`;
}
//9 - converter temperatura
function converterTemperatura() {
  let celsius = Number(document.getElementById("celsius").value);
  let fahrenheit = (c * 9 / 5) + 32;
  document.getElementById("resultado10").innerText = celsius + "°C = " + fahrenheit.toFixed(2) + "°F";
}
//10 - verificar dia
function verificarDia() {
  var dia = parseInt(document.getElementById("diaSemana").value);
  var resultado = "";

  var dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

  if (dia >= 1 && dia <= 7) {
    resultado = dias[dia - 1];
  } else {
    resultado = "Número inválido.";
  }

  document.getElementById("resultado11").innerText = resultado;
}
//11 - verificar senha
function verificarSenha() {
  var senha = document.getElementById("senha").value;
  if (senha === "1234") {
    document.getElementById("resultado12").innerText = "Acesso permitido!";
  } else {
    document.getElementById("resultado12").innerText = "Senha incorreta.";
  }
}
//12 - contagem regressiva
function contagemRegressiva() {
  let resultado = "";
  for (let i = 10; i >= 1; i--) {
    resultado += i + " ";
  }
  document.getElementById("resultado13").innerText = resultado;
}