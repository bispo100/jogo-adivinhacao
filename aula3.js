let input = document.getElementById("text_input")
let div_resultado = document.getElementById("resultado")
let palavra_secreta = "carro"

function adivinhar(){
    let digitado = input.value
    if(digitado == palavra_secreta){
        div_resultado.innerText ="acertou"

    }else{
        div_resultado.innerText ="errou"


    }



}