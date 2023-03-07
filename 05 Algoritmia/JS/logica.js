//Problema1
function Problema1(){
    var p1_input = document.querySelector("#p1-input").value;
    var p1_array = p1_input.split(' ').reverse();
    var p1_res = "";
    
    p1_array.forEach(function (palabra, i){
        if(i != 0 || i != p1_array.length) p1_res += ' ';
        p1_res += palabra;
    });
    document.querySelector("#p1-output").textContent = p1_res;
}

//Problema2
function Problema2(){
  var x1 = document.querySelector("#problema2-x1").value;
  var x2 = document.querySelector("#problema2-x2").value;
  var x3 = document.querySelector("#problema2-x3").value;
  var x4 = document.querySelector("#problema2-x4").value;
  var x5 = document.querySelector("#problema2-x5").value;

  var y1 = document.querySelector("#problema2-y1").value;
  var y2 = document.querySelector("#problema2-y2").value;
  var y3 = document.querySelector("#problema2-y3").value;
  var y4 = document.querySelector("#problema2-y4").value;
  var y5 = document.querySelector("#problema2-y5").value;

  var v1 = [x1, x2, x3, x4, x5];
  var v2 = [y1, y2, y3, y4, y5];

  v1.sort(function (menor, mayor){
    return mayor - menor
  })

  v2.sort(function (menor, mayor){
    return mayor - menor
  })

  var escalar = 0;

  for(var i = 0; i < v1.length; i++){
    escalar += v1[i] * v2[i];
  }

  document.querySelector("#p2-output").textContent = "El producto es: " + escalar;
}


//Problema3

function Problema3() {
  //Primero necesitamos definir un alfabeto
  var alfabeto = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "Y",
    "Z",
  ];
  var p3Input = document.querySelector("#p3-input").value;

  var p3Palabras = p3Input.split(",");


  p3Palabras = p3Palabras.map(function (palabras) {
    return palabras.replace(/\s/g, "").toUpperCase();
  });

  var p3res = "";
  p3Palabras.forEach(function (palabra, i) {
    var letrasUnicas = [];
    var palabraArray = palabra.split("");

    //Iterar el alfabeto
    alfabeto.forEach((letra, j) => {
      //Itero cada palabra
      palabraArray.forEach(function (letrasPalabras, k) {
        // Comparar que la letra este dentro del alfabeto
        if (letrasPalabras == letra) {
          //Si la letra no la hemos contado la agregamos a un array para contar las letras unicas
          if (letrasUnicas.indexOf(letra) < 0) {
            letrasUnicas.push(letra);
          }
        }
      });
    });
    //Vamos a contar la salida
    p3res += "Palabra: " + palabra + "=" + letrasUnicas.length + "\n";
  });
  //Imprimir la salida
  document.querySelector("#p3-output").textContent = p3res;
}
