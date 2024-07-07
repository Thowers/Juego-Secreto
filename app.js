let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados =[];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'Numero secreto es menor');
        } else {
            asignarTextoElemento('p','Numero secreto es mayor');
        }
        intentos++;      
        limpiarCaja(); 
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya se sortearon todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {
        //Si el numero generado esta dentro de la lista 
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','juego del número secreto');
    asignarTextoElemento('p',`Indica un número de 1 a ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalor de numeros
    condicionesIniciales();   
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();


