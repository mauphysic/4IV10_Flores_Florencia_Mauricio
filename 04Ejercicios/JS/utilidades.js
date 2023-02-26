function validaraños(e){
    var teclado = (document.all)? e.keyCode : e.which;

    if(teclado == 8) return true;

    var años = /[0-9\d]/;

    var codigo = String.fromCharCode(teclado);
    return años.test(codigo);
}

function calcutil(){
    var años = document.getElementById("añost").value;
    var meses = document.getElementById("mesest").value;
    var sueldo = document.getElementById("sal").value;

    if(años > 50 || meses > 11 || sueldo > 500000 || sueldo.length == 0 || años.length == 0 && meses.length == 0 || años == 0 && meses == 0){
        alert("Introduce valores válidos");
        return false;
    }

    var sueldo2 = parseInt(sueldo);

    if(años == 0 && meses > 0 || años.length == 0 && meses > 0){
        var util = sueldo2 * 0.05;
    }
    else
    if(años >= 1 && años < 2){
        var util = sueldo2 * 0.07;
    }
    else
    if(años >= 2 && años < 5){
        var util = sueldo2 *0.1;
    }
    else
    if(años >= 5 && años < 10){
        var util = sueldo2 * 0.15;
    }
    else
    if(años >= 10){
        var util = sueldo2 * 0.2;
    }

    util2 = parseInt(util);

    document.getElementById("idades").value = "$ " + util2;
}

function del10(){
    document.getElementById("añost").value = "";
    document.getElementById("mesest").value = "";
    document.getElementById("sal").value = "";
    document.getElementById("idades").value = "";
}