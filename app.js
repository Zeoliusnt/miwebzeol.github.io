'use strict'

const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')

// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -50

        // MOVEMOS el grand
        grande.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los punto
        punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')

    })
})
function verificar(){
    let xnom = document.frm1.txtnom.value;
    let xdni = document.frm1.txtdni.value;
    let xedad = document.frm1.txtedad.value;
    let xemail = document.frm1.txtemail.value;

    if(xnom.length=='0'){
        alert("Ingresa Nombres Completos!!!");
        //document.frm1.txtnom.focus();
        return;
    }
    let errornom=/[A-Za-zÑñ\s]/;
    if(!errornom.test(xnom)){
        alert("Solo letras!!!");
        //document.frm1.txtnom.focus();
        return;
    }
    if(xdni.length=='0' || xdni.length<8){
        alert("Ingresa DNI de forma correcta!!!");
        //document.frm1.txtdni.focus();
        return;
    }            
    let errordni=/\d{8}/;
    if(!errordni.test(xdni)){
        alert("Solo números!!!");
        //document.frm1.dni.focus();
        return;
    }
    if(xedad.length=='0'){
        alert("Ingresa Edad!!!");
        //document.frm1.txtedad.focus();
        return;
    }
    if(isNaN(xedad)){
        alert("Solo números!!!");
        //document.frm1.txtedad.focus();
        return;
    }
    if(xemail.length=='0'){
        alert("Ingresa email ");
        return;
    }
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;			
      if (!expr.test(xemail)){
      alert("Error: La dirección de correo es incorrecta.");
          return;
    }            	
    if (xest.length=='0'){
        alert("Error: Elija Estudios.");
        return;
    }	
    
    document.frm1.method="GET";
    document.frm1.submit();
}