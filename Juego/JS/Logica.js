var iconos;
var selecciones = [];
var j = 0;

tablero();

function cargarIconos() {
  iconos = [
    '<img src="./Imagenes/Marvel-Img/spider-man.ico" class="img">',
    '<img src="./Imagenes/Marvel-Img/Reed.ico" class="img">',
    '<img src="./Imagenes/Marvel-Img/Antorcha.ico" class="img">',
    '<img src="./Imagenes/Marvel-Img/thing.ico" class="img">',
    '<img src="./Imagenes/Marvel-Img/Daredevil.ico" class="img">',
    '<img src="./Imagenes/Marvel-Img/Iron-man.ico" class="img">',
    '<img src="./Imagenes/Marvel-Img/Doom.ico" class="img">',
    '<img src="./Imagenes/Marvel-Img/Galactus.ico" class="img">',
    '<img src="./Imagenes/Marvel-Img/Doc-ock.ico" class="img">',
    '<img src="./Imagenes/Marvel-Img/Thanos.ico" class="img">',
    '<img src="./Imagenes/Marvel-Img/Adam.ico" class="img">',
    '<img src="./Imagenes/Marvel-Img/Deadpool.ico" class="img">',
    '<img src="./Imagenes/Marvel-Img/wolverine.ico" class="img">',
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
