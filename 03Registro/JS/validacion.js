/*
JavaScript es un lenguaje 
que posee un paradigma orientqado a objetos, a funciones y eventos
por tal motivo presenta una particularidad que es:

No tipado
no existe int, float, etc.

Todo es var -> variable

Los tipos de variables que se maneejan son:

VAR
Let es una variable de tipo "Protected"
CONST es una constante


*/

function validar(formulario) {
    if (formulario.nombre.value.length <= 3) {
      alert("Favor de ingresar más de 3 caracteres en el campo nombre");
      formulario.nombre.focus();
      return false;
    }
    var checarABC = "qazwsxedcrfvtgbyhnujmikolpñ" + "QAZWSXEDCRFVTGBYHNUJMIKOLPÑ";
  
    var cadenaNombre = formulario.nombre.value;
  
  
    var todoesvalido = true;
  
    for (var i = 0; i < cadenaNombre.length; i++) {
      var caracteres = cadenaNombre.charAt(i);
      for (var j = 0; j < checarABC.length; j++) {
        if (caracteres == checarABC.charAt(j)) {
          break;
        }
      }
      if (j == checarABC.length) {
        todoesvalido = false;
        break;
      }
    }
    if (!todoesvalido) {
      alert("Ingresa solo letras en el campo nombre");
      formulario.nombre.focus();
      return false;
    }
  
    var edad = parseInt(formulario.edad.value);
  
  
    if (edad < 0 || edad >= 99) {
      alert("Ingresa una edad valida entre 01 y 99 años");
      formulario.edad.focus();
      return false;
    }
    var checarABC = "0123456789";
  
    var cadenaNombre = formulario.edad.value;
  
  
    var todoesvalido = true;
  
    for (var i = 0; i < cadenaNombre.length; i++) {
      var caracteres = cadenaNombre.charAt(i);
      for (var j = 0; j < checarABC.length; j++) {
        if (caracteres == checarABC.charAt(j)) {
          break;
        }
      }
      if (j == checarABC.length) {
        todoesvalido = false;
        break;
      }
    }
    if (!todoesvalido) {
      alert("Ingresa solo numeros en el campo edad");
      formulario.edad.focus();
      return false;
    }

    let ingreso = document.getElementById("miento").value;
    let d = new Date(ingreso);
  
    if (!!d.valueOf()) {
      año = parseInt(d.getFullYear());
      mes = parseInt(d.getMonth());
      dia = parseInt(d.getDate());
    }
  
    let fecha_actual = new Date();
    let año_actual = fecha_actual.getFullYear();
  
    let fechaFebrero = new Date("2023-02-28");
    let mesFebrero = fechaFebrero.getMonth();
    let diaFebrero = fechaFebrero.getDate();
  
    if (mes == mesFebrero && dia > diaFebrero) {
      alert("Febrero no tiene mas de 28 dias");
      return false;
    }
  
    if (año > añoActual || año < "1940") {
      alert("No se puede ingresar ese año ");
      return false;
    }


   }


    
