function calcularEdad(){
    var fecha_actual = new Date("2023-02-25");

    var nacimiento = document.getElementById("fecha_nac").value;
    var d = new Date(nacimiento);

    var año_act = parseInt(fecha_actual.getFullYear());
    var mes_act = parseInt(fecha_actual.getMonth());
    var dia_act = parseInt(fecha_acutal.getDate());

    var año_nac = parseInt(d.getFullYear());
    var mes_nac = parseInt(d.getMonth());
    var dia_nac = parseInt(d.getDate());

    if(nacimiento > fecha_act || año_nac < 1933 || nacimiento.length == 0 || mes_nac == 02 && dia_nac > 28 || mes_nac == 4 && dia_nac == 31 || mes_nac == 6 && dia_nac == 31 || mes_nac == 9 && dia_nac == 31 || mes_nac == 11 & dia_nac == 31){
        alert("Introduce una fecha válida");
        return false;
    }

    var dias_act = (año_act * 365) + ((mes_act - 1) * 30) + dia_act;
    var dias_nac = (año_nac * 365) + ((mes_nac - 1) * 30) + dia_nac;

    edad = (dias_act - dias_nac)/365;

    document.getElementById("edad").value = edad + " años";
}