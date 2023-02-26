function validarAl(e){
    var teclado = (document.all)? e.keyCode : e.which;

    if(teclado == 8) return true;

    var alums = /[0-9\d]/;

    var codigo = String.fromCharCode(teclado);
    return alums.test(codigo);
}

function calculoAl(){
    var hom = document.getElementById("hombres").value;
    var muj = document.getElementById("mujeres").value;

    if(hom > 100 || muj > 100 || hom.length == 0 || muj.length == 0){
        alert("Introduce valores válidos");
        return false;
    }

    var hom2 = parseInt(hom);
    var muj2 = parseInt(muj);

    var total = hom2 + muj2;

    var porcentajeh = (hom2/total) * 100; 
    var porcentajem = (muj2/total) * 100;

    var porcentajeh2 = parseInt(porcentajeh);
    var porcentajem2 = parseInt(porcentajem);

    document.getElementById("totalh").value = porcentajeh2 + "%";
    document.getElementById("totalm").value = porcentajem2 + "%";
    document.getElementById("totala").value = total;
}

function del5(){
    document.getElementById("hombres").value = "";
    document.getElementById("mujeres").value = "";
    document.getElementById("totalh").value = "";
    document.getElementById("totalm").value = "";
    document.getElementById("totala").value = "";
}