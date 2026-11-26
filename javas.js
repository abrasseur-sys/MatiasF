function modoOscuro(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
        let textos = document.querySelectorAll("h3");

    textos.forEach(function(texto){
        texto.style.color = "white";
    });
}
function modoClaro(){

    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

    let textos = document.querySelectorAll("h3");

    textos.forEach(function(texto){
        texto.style.color = "black";
    });

}


