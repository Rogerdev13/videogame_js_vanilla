//Llamaremos a las variables que usaremos para almacenar los numeros y el resultado.
var num1 , num2 , resultado , opcionCorrecta;

//Llamaremos a los elementos del dom que utilizaremos en esta practica.

txt_message = document.getElementById('message');
txt_resultado = document.getElementById('resultado');
txt_operacion = document.getElementById('suma');
op1 = document.getElementById('op1');
op2 = document.getElementById('op2');
op3 = document.getElementById('op3');

function start(){
    txt_resultado.innerHTML = "?";
    txt_message.innerHTML = "";

    num1 = Math.round(Math.random()*9);
    num2 = Math.round(Math.random()*9);

    txt_operacion.innerHTML= num1 + "+" + num2 + "=";

    resultado = num1 + num2;

    opcionCorrecta = Math.round(Math.random()* 2);

    if(opcionCorrecta == 0){
        op1.innerHTML= resultado;
        op2.innerHTML= resultado + 1;
        op3.innerHTML= resultado - 1;
    }
    if(opcionCorrecta == 1){
        op2.innerHTML= resultado;
        op1.innerHTML= resultado + 2;
        op3.innerHTML= resultado - 1;
    }
    if(opcionCorrecta == 2){
        op3.innerHTML= resultado;
        op2.innerHTML= resultado + 3;
        op1.innerHTML= resultado - 1;
    }
}

function comprobarRespuesta(opcionEscogida){
    txt_resultado.innerHTML= opcionEscogida.innerHTML;

    //Comprobaremos si la opcion es correcta

    if(opcionEscogida.innerHTML == resultado){
        txt_message.innerHTML = "Muy bien anunaki";
        txt_message.style.color = "green";

        setTimeout(start, 2000);
    }else{
        txt_message.innerHTML = "Mal misocio:(";
        txt_message.style.color = "red";

        setTimeout(clean , 2000);
    }
}

function clean(){
    txt_message.innerHTML = "";
    txt_resultado.innerHTML="?";
}

start();