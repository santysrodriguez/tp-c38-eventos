window.onload = function(){
    //JavaScript del Index
    let container = document.querySelector('.container');
    let subtitulo = document.querySelector('.subtitulo');
    let destacado = document.querySelectorAll('p');
    let fondo = document.querySelector('body');
    let enlace = document.querySelector('a');
    
    let nombre = prompt('Ingrese su nombre');
    console.log(nombre);
    if(nombre !=''){
        subtitulo.innerHTML += nombre;
    }else{
        subtitulo.innerHTML += 'INVITADO';
    }
        
    subtitulo.style.textTransform = 'uppercase';
    let confirmar = confirm('Desea colocar un fondo de pantalla ')
    if(confirmar){
        fondo.classList.add('fondo');
        enlace.style.color = '#E51B3E';
    }
    console.log(destacado);
    for(let i = 0 ; i < destacado.length; i++){
        if(i % 2 == 0){
            destacado[i].classList.add('destacadoPar');
        }else{
            destacado[i].classList.add('destacadoImpar');
        }
    }
    

    container.style.display = 'block';

/* agregar un evento para que cada vez que el usuario haga clic sobre el
logo de Digital House se muestre el menú lateral con id="menu". */

let logoDh = document.querySelector(".logoDH")
let menuLateral = document.getElementById("menu")

logoDh.addEventListener("click", (e) => {
    menuLateral.classList.toggle("mostrar")
})


/* agregar un evento que permita ocultar el menú lateral cuando el
mouse deje el área del menú. */

    menuLateral.addEventListener("mouseout", (e) => {
        menuLateral.classList.toggle("mostrar")
    })




}