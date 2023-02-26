function validarMay(e){
    var teclado = (document.all)? e.keyCode : e.which;

    if(teclado == 8) return true;

    var nums = /[0-9\d]/;

    var codigo = String.fromCharCode(teclado);
    return nums.test(codigo);
}

function HallarMay(){
    var num1 = document.getElementById("1ero").value;
    var num2 = document.getElementById("2do").value;
    var num3 = document.getElementById("3ero").value;

    if(num1 > 100 || num2 > 100 || num3 > 100 || num1.length == 0 || num2.length == 0 || num3.length == 0){
        alert("Introduce valores válidos");
        return false
    }
    if(num1 == num2 || num2 == num3 || num3 == num1){
        alert("Introduce valores diferentes");
        return false;
    }

    var num1_2 = parseInt(num1);
    var num2_2 = parseInt(num2);
    var num3_2 = parseInt(num3);

    if(num1_2 > num2_2 && num1_2 > num3_2){
        var numMayor = num1_2;
    }
    else
    if(num2_2 > num3_2 && num2_2 > num1_2){
        var numMayor = num2_2;
    }
    else
    var numMayor = num3_2;

    document.getElementById("mayor2").value = numMayor;
}

function del8(){
    document.getElementById("1ero").value = "";
    document.getElementById("2do").value = "";
    document.getElementById("3ero").value = "";
    document.getElementById("mayor2").value = "";
}