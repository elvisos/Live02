var cx = document.getElementById("valor");
var bt = document.getElementById("btn");
var sd = document.getElementById("saida");

bt.onclick = function(){
    if(cx.value%2==0)
    sd.innerHTML = "O número digitado é par";
    else
    sd.innerHTML = "O número digitado é ímpar";
    };
