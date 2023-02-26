function validarcal(e){
    var teclado = (document.all)? e.keyCode : e.which;

    if(teclado == 8) return true;

    var cals = /[0-9\d .]/

    var codigo = String.fromCharCode(teclado);
    return cals.test(codigo);
}

function calpromedio(){
    var parcial1 = document.getElementById("1").value;
    var parcial2 = document.getElementById("2").value;
    var parcial3 = document.getElementById("3").value;
    var ex_final = document.getElementById("ex_final").value;
    var pro_final = document.getElementById("p_final").value;

    if(parcial1 > 10 || parcial2 > 10 || parcial3 > 10 || ex_final > 10 || pro_final > 10 || parcial1 < 0 || parcial2 < 0 || parcial3 < 0 || ex_final < 0 || pro_final < 0){
        alert("Introduce una calificación válida");
        return false;
    }

    if(parcial1.length > 3 || parcial2.length > 3 || parcial3.length > 3 || ex_final.length > 3 || pro_final.length > 3){
        alert("Introduce una calificación válida");
        return false;  
    }

    if(parcial1.length == 0 || parcial2.length == 0 || parcial3.length == 0 || ex_final.length == 0 || pro_final.length == 0){
        alert("Favor de llenar los campos");
        return false;  
    }

    parcial1_2 = parseFloat(parcial1);
    parcial2_2 = parseFloat(parcial2);
    parcial3_2 = parseFloat(parcial3);
    ex_final2 = parseFloat(ex_final);
    pro_final2 = parseFloat(pro_final);

    var porcentaje1 = (parcial1_2 * (18.33)) / 100;
    var porcentaje2 = (parcial2_2 * (18.33)) / 100;
    var porcentaje3 = (parcial3_2 * (18.33)) / 100;
    var porcentaje4 = (ex_final2 * (30)) / 100;
    var porcentaje5 = (pro_final2 * (15)) / 100;

    var total = porcentaje1 + porcentaje2 + porcentaje3 + porcentaje4 + porcentaje5;

    var promedio = parseInt(total);

    document.getElementById("promedio").value = promedio;
}

function del4(){
    document.getElementById("1").value = "";
    document.getElementById("2").value = "";
    document.getElementById("3").value = "";
    document.getElementById("ex_final").value = "";
    document.getElementById("p_final").value = "";
    document.getElementById("promedio").value = "";
}