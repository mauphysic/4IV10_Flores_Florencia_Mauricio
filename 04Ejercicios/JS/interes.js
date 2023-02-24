function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);

}

function interes(){
    var valor = document.getElementById("cantidad").value;

    var result = parseInt(valor)

    var interes = result * 0.02;

    var total = interes + result;

    document.getElementById("cantidad1").value = "$ " + total;
}

function del() {
    document.getElementById("cantidad").value = "";
    document.getElementById("cantidad1").value = "";
}