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

function verificarIdade(){
    let caracteresFrase = Number(document.getElementById("frase").value);
    frase.length();
    document.getElementById("resultado3").innerText = ("Numero de caracteres: " + caracteresFrase);
}