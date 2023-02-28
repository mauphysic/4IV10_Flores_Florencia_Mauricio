function calcularEdad(){

    

    var nacimiento = document.getElementById("fecha_nac").value;

    if(nacimiento.length == 0){
        alert("Introduce una fecha válida");
        return false;
    }

    var d = new Date(nacimiento);

    var fecha_actual = new Date();
    var año_act = parseInt(fecha_actual.getFullYear());
    var mes_act = parseInt(fecha_actual.getMonth());
    var dia_act = parseInt(fecha_actual.getDate());

    if(!!d.valueOf()){
    var año_nac = parseInt(d.getFullYear());
    var mes_nac = parseInt(d.getMonth());
    var dia_nac = parseInt(d.getDate());
    }

    if(año_nac > año_act || año_nac < "1933"){
        alert("Ingresa una fecha válida")
        return false;
    }else{
        var años = año_act - año_nac;
        var meses = mes_act - mes_nac;

        if(meses < 0) {
            años--;
        }

        document.getElementById("edad2").value = años + " años";
    }
}

function del6(){
    document.getElementById("fecha_nac").value = "";
    document.getElementById("edad2").value = "";
}