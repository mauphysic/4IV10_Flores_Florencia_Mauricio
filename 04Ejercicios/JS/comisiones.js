function validars(e){
    var teclado = (document.all)? e.keyCode : e.which;

    if(teclado == 8) return true;

    var nums = /[0-9 \d .]/;

    var codigo = String.fromCharCode(teclado);
    return nums.test(codigo);
}

function sueldof(){
    var sueldo = document.getElementById("s_inicial").value;


    if(sueldo > 50000000 || sueldo == 0 || sueldo.length == 0){
        alert("Introduce un sueldo válido");
        formulario2.s_inicial.focus();
        return false;
    }

    sueldo2 = parseInt(sueldo);

    var ventas = sueldo2 * 0.1;

    var comision = ventas * 5;

    var impuestos = sueldo2 * 0.28;

    var total = sueldo2 + comision - impuestos;

    document.getElementById("cantidad2").value = "$ " + total;
}

function del2(){
    document.getElementById("s_inicial").value = "";
    document.getElementById("cantidad2").value = "";
}