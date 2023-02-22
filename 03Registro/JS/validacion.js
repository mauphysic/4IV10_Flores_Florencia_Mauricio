/*
JavaScript es un lenguaje 
que posee un paradigma orientqado a objetos, a funciones y eventos
por tal motivo presenta una particularidad que es:

No tipado
no existe int, float, etc.

Todo es var -> variable

Los tipos de variables que se maneejan son:

VAR
Let es una variable de tipo "Protected"
CONST es una constante


*/

function validar(formulario){

    if(formulario.nombre.value.length <= 3){
        alert("Favor de ingresar más de tres caracteres");
        formulario.nombre.focus();
        return false;
    }    
    var checarAbc = "qwertyuiolpasdfghjklñzxvcbnm" + "QWERTYUIOPASDFGHJKLÑZXCVBNMÑ";

    var cadenaNombre = formulario.nombre.value;

    //alert(cadenaNombre)

    var todoesvalido = true;

    for(var i=0; i <cadenaNombre.length; i++){
        var caracteres = cadenaNombre.charAt(i);
        for(var j = 0; j < checarAbc.length; j++){
            if(caracteres == checarAbc.charAt(j)){
                break;
            }
        }
        if (j == checarAbc.length){
            todoesvalido = false;
            break;
        }
    }
    if(!todoesvalido){
        alert("No pongas números");
        formulario.nombre.focus();
        return false;
    }

    var edad = parseInt(formulario.edad.value)
    alert(edad)
    if((edad<1 ) || (edad > 99)){
        alert("Nel perro");
        formulario.edad.focus();
        return false;
    }    
    var checarAbc = "0123456789";

    var cadenaNombre = formulario.edad.value;

    //alert(cadenaNombre)

    var todoesvalido = true;

    for(var i=0; i <cadenaNombre.length; i++){
        var caracteres = cadenaNombre.charAt(i);
        for(var j = 0; j < checarAbc.length; j++){
            if(caracteres == checarAbc.charAt(j)){
                break;
            }
        }
        if (j == checarAbc.length){
            todoesvalido = false;
            break;
        }
    }
    if(!todoesvalido){
        alert("Que no");
        formulario.nombre.focus();
        return false;
    }

    //es obtener el campo de correo
    var email = formulario.correo.value

    //vamos a crear una expresión regular
    var prueba = /([Aa-Zz] + [0-9] + \. ){10}\@ ([Aa-Zz] + [0-9] ){8}\. ([Aa-Zz] + [0-9] + \. ){3} /g;

    alert("Email " + (prueba.test(email) ? " " : " No ") + "Válido");

    return prueba.test;

}
