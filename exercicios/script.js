    //1 - soma Simples
function somar(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    document.getElementById("resultado1").innerText = ("Resultado: " + (num1 + num2));
}
//2 - verificar idade

function verificarIdade(){
    let idade = Number(document.getElementById("idade").value);
    if (idade >= 18){
        document.getElementById("resultado2").innerText = ("Você é maior de idade");
    } else{
        document.getElementById("resultado2").innerText = ("Você é menor de idade");    
    }
}
//3 - contar caracteres

function verificarNumCaracter(){
    let frase = document.getElementById("frase").value;
    let caracteresFrase = frase.length;
    document.getElementById("resultado3").innerText = ("Número de caracteres: " + caracteresFrase);
} 

//4 - verificar se o numero é par ou impar
  function verificarNumeroPar() {
      let numero = Number(document.getElementById("parOuImpar").value);
      document.getElementById("resultado4").innerText = (numero % 2 === 0) ? "É par." : "É ímpar.";
    }
//5 - deixar em caixa alta
    function caixaAlta() {
      let nome = document.getElementById("nome").value;
      document.getElementById("resultado5").innerText = nome.toUpperCase();
    }
//6 - comparar numeros
    function compararNumeros() {
      let n1 = Number(document.getElementById("n1").value);
      let n2 = Number(document.getElementById("n2").value);
      let resultado = "";
      if (n1 > n2) resultado = `Maior: ${n1}`;
      else if (n2 > n1) resultado = `Maior: ${n2}`;
      else resultado = "Os dois números são iguais.";
      document.getElementById("resultado6").innerText = resultado;
    }
//6 - gerar tabuada
    function gerarTabuada() {
      let numero = Number(document.getElementById("numeroTabuada").value);
      let resultado = "";
      for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}<br>`;
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
      let n1 = Number(document.getElementById("nota1").value);
      let n2 = Number(document.getElementById("nota2").value);
      let n3 = Number(document.getElementById("nota3").value);
      let media = ((n1 + n2 + n3) / 3).toFixed(2);
      let status = media >= 6 ? "Aprovado!" : "Reprovado.";
      document.getElementById("resultado9").innerText = `${status} Média: ${media}`;
    }
//9 - converter temperatura
    function converterTemperatura() {
      let c = Number(document.getElementById("celsius").value);
      let f = (c * 9/5) + 32;
      document.getElementById("resultado10").innerText = `${c}°C = ${f.toFixed(2)}°F`;
    }
//10 - verificar dia
    function verificarDia() {
      let dia = Number(document.getElementById("diaSemana").value);
      const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
      let resultado = (dia >= 1 && dia <= 7) ? dias[dia - 1] : "Número inválido.";
      document.getElementById("resultado11").innerText = resultado;
    }
//11 - verificar senha
    function verificarSenha() {
      let senha = document.getElementById("senha").value;
      document.getElementById("resultado12").innerText = senha === "1234" ? "Acesso permitido!" : "Senha incorreta.";
    }
//12 - contagem regressiva
    function contagemRegressiva() {
      let resultado = "";
      for (let i = 10; i >= 1; i--) {
        resultado += i + " ";
      }
      document.getElementById("resultado13").innerText = resultado;
    }