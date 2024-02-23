function circulo(){
    let figura=document.getElementById("figura");
    figura.classList.toggle("circulo");

    let titulo = document.getElementById("titulo");
    titulo.innerHTML = 'CIRCULO'
}

function rectangulo(){
    let figura=document.querySelector("#figura");
    figura.classList.toggle("rectangulo")

    let titulo = document.getElementById("titulo");
    titulo.innerHTML = 'RECTANGULO'
}

function moveRight(){
    let figura=document.getElementById("figura");
    figura.classList.toggle("right");
    let titulo = document.getElementById("titulo");
    titulo.innerHTML = 'RIGHT'
}

function degradado(){
    let figura=document.querySelector("#figura");
    figura.classList.toggle("degradado");

    let titulo = document.getElementById("titulo");
    titulo.innerHTML = 'DEGRADADO'
}

function gif(){
    let figura=document.getElementById("figura");;
    figura.classList.toggle("gif")

    let titulo = document.getElementById("titulo");
    titulo.innerHTML = 'GIF'
}

function luna(){
    let figura=document.querySelector("#figura");
    figura.classList.toggle("luna")

    let titulo = document.getElementById("titulo");
    titulo.innerHTML = 'LUNA'
}

function estrella(){
    let figura=document.getElementById("figura");
    figura.classList.toggle("estrella");

    let titulo = document.getElementById("titulo");
    titulo.innerHTML = 'ESTRELLA'
}

function triangulo(){
    let figura=document.querySelector("#figura");
    figura.classList.toggle("triangulo")

    let titulo = document.getElementById("titulo");
    titulo.innerHTML = 'TRIANGULO'
}

function moveTop(){
    let figura=document.getElementById("figura");
    figura.classList.toggle("movetop")

    let titulo = document.getElementById("titulo");
    titulo.innerHTML = 'TOP'
}

function moveButtom(){
    let figura=document.querySelector("#figura");
    figura.classList.toggle("movebuttom")

    let titulo = document.getElementById("titulo");
    titulo.innerHTML = 'BOTTOM'
}

function moveLeft(){
    let figura=document.getElementById("figura");
    figura.classList.toggle("moveleft")

    let titulo = document.getElementById("titulo");
    titulo.innerHTML = 'LEFT'
}

function moveDiagonal(){
    let figura=document.querySelector("#figura");
    figura.classList.toggle("movediagonal");

    let titulo = document.getElementById("titulo");
    titulo.innerHTML = 'DIAGONAL'
}

function panelLateral(){
    let panel=document.getElementById("panel-lateral");
    panel.classList.toggle("active");

    let titulo = document.getElementById("titulo");
    titulo.innerHTML = 'PANEL LATERAL'

    
}

function panelSuperior(){
    let panel=document.getElementById("panel-superior");
    panel.classList.toggle("active");

    let titulo = document.getElementById("titulo");
    titulo.innerHTML = 'PANEL SUPERIOR'
}

function cambiarFondo() {
    var seccionPrincipal = document.querySelector('section');
    // seccionPrincipal.style.background = "url(img/bg-secundario.jpg)";
    seccionPrincipal.classList.toggle("active");
    
    let titulo = document.getElementById("titulo");
    titulo.innerHTML = 'FONDO'
}

function cambioColor(){
    let color = prompt('INGRESE UN COLOR');
    let cambio = document.querySelector('section');

    cambio.style.background = color;
}