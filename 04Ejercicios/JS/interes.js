function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);

}

function interes(){
    var valor = document.getElementById("cantidad").value;
    var tiempo = document.getElementById("meses").value;

    if(valor > 100000000 || tiempo > 36 || valor.length == 0 || tiempo.length == 0){
        alert("Opcion inválida");
        formulario.cantidad.focus();
        return false;
    }

    var result = parseInt(valor);

    var meses = parseInt(tiempo);

    var interes = result * 0.08;

    var interes2 = interes * meses;

    var total = result + interes2;

    document.getElementById("cantidad1").value = "$ " + total;
}

function del1() {
    document.getElementById("cantidad").value = "";
    document.getElementById("cantidad1").value = "";
    document.getElementById("meses").value="";
}