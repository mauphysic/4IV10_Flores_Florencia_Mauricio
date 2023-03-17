var iconos;
var selecciones = [];
var j = 0;

tablero();

function cargarIconos() {
  iconos = [
    '<img src="./Imagenes/STARWARS-Img/vader.ico" class="img">',
    '<img src="./Imagenes/STARWARS-Img/anakin.ico" class="img">',
    '<img src="./Imagenes/STARWARS-Img/luke.ico" class="img">',
    '<img src="./Imagenes/STARWARS-Img/obi-wan.ico" class="img">',
    '<img src="./Imagenes/STARWARS-Img/sidious.ico" class="img">',
    '<img src="./Imagenes/STARWARS-Img/boba-fett.ico" class="img">',
    '<img src="./Imagenes/STARWARS-Img/stormtrooper.ico" class="img">',
    '<img src="./Imagenes/STARWARS-Img/millenary.ico" class="img">',
    '<img src="./Imagenes/STARWARS-Img/starkiller.ico" class="img">',
    '<img src="./Imagenes/STARWARS-Img/skywalker-kenobi.ico" class="img">',
    '<img src="./Imagenes/STARWARS-Img/R2-D2.ico" class="img">',
    '<img src="./Imagenes/STARWARS-Img/luke-vs-vader.ico" class="img">',
    '<img src="./Imagenes/STARWARS-Img/grievous.ico" class="img">',
    '<link rel="stylesheet" href="./CSS/style.css" />',
  ];
}

function tablero() {
  j = 0;
  selecciones = [];
  cargarIconos();
  var tablero = document.getElementById("tablero");
  var tarjetas = [];
  for (var i = 0; i < 26; i++) {
    tarjetas.push(`<div class="a-tarjeta" onclick="seleccion(${i})">
    <div class="tarjeta" id="tarjeta${i}">
      <div class="espalda" id="trasera${i}">
      ${iconos[0]}
      </div>
      <div class="cara">
        <img src="./Imagenes/Marvel-Img/Logo.png" class="logo" alt="" />
      </div>
    </div>
  </div>`);

    if (i % 2 == 1) {
      iconos.splice(0, 1);
    }
  }
  tarjetas.sort(() => Math.random() - 0.5);
  tablero.innerHTML = tarjetas.join("  ");
}

function seleccion(i) {
  var tarjeta = document.getElementById("tarjeta" + i);
  if (tarjeta.style.transform != "rotateY(180deg)") {
    tarjeta.style.transform = "rotateY(180deg)";
    selecciones.push(i);
  }
  if (selecciones.length == 2) {
    deseleccionar(selecciones);
    selecciones = [];
  }

  function deseleccionar(selecciones) {
    setTimeout(() => {
      var trasera1 = document.getElementById("trasera" + selecciones[0]);
      var trasera2 = document.getElementById("trasera" + selecciones[1]);
      if (trasera1.innerHTML != trasera2.innerHTML) {
        var tarjeta1 = document.getElementById("tarjeta" + selecciones[0]);
        var tarjeta2 = document.getElementById("tarjeta" + selecciones[1]);
        tarjeta1.style.transform = "rotateY(0deg)";
        tarjeta2.style.transform = "rotateY(0deg)";
        j += 1;
        var restantes = 4 - j;
        if (restantes == 0) {
          alert("No te quedan más intentos. Fin del juego");
          tablero();
        } else {
          alert("Fallaste. Intentos restantes: " + restantes);
        }
      } else {
        j = 0;
      }
    }, 1000);
  }
}
