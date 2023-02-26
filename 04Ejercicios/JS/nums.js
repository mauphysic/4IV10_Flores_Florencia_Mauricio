function validarop(e){
    var teclado = (document.all)? e.keyCode : e.which;

    if(teclado == 8) return true;

    var nums = /[0-9\d]/;

    var codigo = String.fromCharCode(teclado);
    return nums.test(codigo);
}

function calcularnums(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    if(num1 > 10 || num2 > 10 || num1.length == 0 || num2.length == 0){
        alert("Introduce un número válido")
        return false;
    }

    var num1_2 = parseInt(num1);
    var num2_2 = parseInt(num2);

    if(num1_2 == num2_2){
        var resultado = num1_2 * num2_2;
    }
    else

    if(num1_2 > num2_2){
        var resultado = num1_2 ** num2_2;
    }
    else

    if(num1_2 < num2_2){
        var resultado = num2_2/num1_2;
    }

    document.getElementById("result").value = resultado;
}

function del7(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").value = "";
}