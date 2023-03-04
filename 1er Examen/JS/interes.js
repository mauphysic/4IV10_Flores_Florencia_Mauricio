function validar(e){
    var teclado = (document.all)? e.keyCode : e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d ]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function calculo(){
    var inver = document.getElementById("pres").value;
    var tiempo = document.getElementById("años").value;
    var meses = tiempo * 12;
    var abono = inver/meses;
    var n = 0
    var interes = 0;
    var cuota= 0;
    var ninteres = 0;
    var ninver = 0;
    var ninver2 = 0;
    var mes = 0;
    var nabono = 0;
    var ncuota = 0;
    var compuesto = 0;


    if(inver.length == 0 || tiempo.length == 0){
        alert("Favor de llenar los campos");
        return false;
    }

    if(inver > 1000000 || inver < 1000 || tiempo > 20 || tiempo < 1){
        alert("Introduce valores dentro del rango");
        return false;
    }
    
    while (n <= (meses - 1)){
        interes = inver * 0.06;
        cuota = interes + abono;
        ninver = inver - abono
        inver = ninver

        ninteres += "$" + interes.toFixed(2) + "\n";
        ninver2 += "$" + inver.toFixed(2) + "\n";
        mes += n + 1 + "\n";
        nabono += "$" + abono.toFixed(2) + "\n";
        ncuota += "$" + cuota.toFixed(2) + "\n";
        n += 1;
        
    }
    var inver2 = document.getElementById("pres").value
    compuesto = inver2 * (1 + 0.96) ** tiempo
    var compuesto2 = parseInt(compuesto);

    document.querySelector("#mes").textContent = mes;
    document.querySelector("#dinero").textContent = ninver2;
    document.querySelector("#cuota").textContent = ncuota;
    document.querySelector("#interes").textContent = ninteres;
    document.querySelector("#abono").textContent = nabono;
    document.querySelector("#compuesto").textContent = "$" + compuesto2;
    document.querySelector("#texto").textContent = "Interés Compuesto"
}

function del(){
    document.querySelector("#mes").textContent = "";
    document.querySelector("#dinero").textContent = "";
    document.querySelector("#cuota").textContent = "";
    document.querySelector("#interes").textContent = "";
    document.querySelector("#abono").textContent = "";
    document.querySelector("#compuesto").textContent = "";
    document.querySelector("#texto").textContent = "";
    document.getElementById("años").value = "";
    document.getElementById("pres").value = "";
}