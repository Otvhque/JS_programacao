var n, jg, i;
n = parseInt(Math.random()*101)

jg = parseInt(prompt("Digite um número:\n"))

while (jg!= n){
    if(jg>n){
        alert("Muito Alto!")
    }else{
        alert("Muito Baixo!")
    }
    jg = parseInt(prompt("Tente denovo:\n"))
    i++;
}
alert("Você acertou")
