window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');


/* establecer que, cada vez que se pase el mouse por el título
'AGREGAR PELÍCULA', este cambie su color. */
    
titulo.addEventListener("mouseover", () => {
    titulo.classList.toggle("botonBorrar")
})
titulo.addEventListener("mouseout", () => {
    titulo.classList.toggle("botonBorrar")
})


/* Micro desafío - Paso 2: */

let inputTitulo = document.getElementById("titulo");
let estadoSecreto = 0;

inputTitulo.addEventListener("keypress", (e) => {
    switch (estadoSecreto) {
        case 0:
            e.key === "s" ? ++estadoSecreto : estadoSecreto = 0;
            console.log(estadoSecreto)
        break;
        case 1:
            e.key === "e" ? ++estadoSecreto : estadoSecreto = 0;
            console.log(estadoSecreto)
        break;
        case 2:
            e.key === "c" ? ++estadoSecreto : estadoSecreto = 0;
            console.log(estadoSecreto)
        break;
        case 3:
            e.key === "r" ? ++estadoSecreto : estadoSecreto = 0;
            console.log(estadoSecreto)
        break;
        case 4:
            e.key === "e" ? ++estadoSecreto : estadoSecreto = 0;
            console.log(estadoSecreto)
        break;
        case 5:
            e.key === "t" ? ++estadoSecreto : estadoSecreto = 0;
            console.log(estadoSecreto)
        break;
        case 6:
            e.key === "o" ? ++estadoSecreto : estadoSecreto = 0;
            console.log(estadoSecreto)
            estadoSecreto === 7 && alert("SECRETO MAGICO")
            estadoSecreto = 0;
        break;
        default:
            estadoSecreto = 0;
        break;
}
})
}