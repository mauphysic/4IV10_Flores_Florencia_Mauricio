function validarh(e){
    var teclado = (document.all)? e.keyCode : e.which;

    if(teclado == 8) return true;

    var hrs = /[0-9\d]/;

    var codigo = String.fromCharCode(teclado);
    return hrs.test(codigo);
}

function calcularsue(){
    var sueldo = document.getElementById("sueldoh").value;
    var horas = document.getElementById("hrst").value;

    if(sueldo > 500000 || horas > 70 || sueldo.length == 0 || horas.length == 0){
        alert("Introduce valores válidos")
        return false;
    }

    var sueldo2 = parseInt(sueldo);
    var horas2 = parseInt(horas);

    if(horas2 <= 40){
        var sueldotot = sueldo2 * horas2;
    }
    else
    if(horas2 > 40 && horas2 <= 48){
        var sueldotot = (sueldo2 * 40) + (2 * sueldo2) * (horas2 - 40);
    }
    else
    if(horas2 > 48){
        var sueldotot = (sueldo2 * 40) + (2 * sueldo2) * (8) + (3 * sueldo2) * (horas2 - 48)
    }

    document.getElementById("sueldotot").value = "$ " + sueldotot;
}

function del9(){
    document.getElementById("sueldoh").value = "";
    document.getElementById("hrst").value = "";
    document.getElementById("sueldotot").value = "";
}