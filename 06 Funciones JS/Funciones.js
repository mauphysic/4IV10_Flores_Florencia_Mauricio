/*
Las variables que se ocupan dentro de JS son 3:
VAR, Que actualmente está en sustitución
LET, Es una variable protegida, ya que sólo funciona dentro de una función o método de un bloque de código
CONST, La cual es el valor constante en el documento, y no puede cambiar su estado
La comilla al revés se ocupa para modificar el comportamiento de un html o para incrustar en javascript código de HTML
*/

let x = "x";

if(true){
    const x = "y"
    console.log(x);
}

function sumarFuncionNormal(n1, n2){
    return n1 + n2;
}

console.log(`La suma de (3, 4)`: $ sumarFuncionNormal(3, 4));

/*
Una función flecha tiene como estructura "cadena -> id, clase, name, atributo" 


const sumarFuncionFlecha = (n1, n2) =>
n1 + n2;

console.log(`La suma de (3, 4): $ (sumarFuncionFlecha(3, 4))`);

const razasDePerros = {
    "Gran Danes",
    "Pastor Aleman",
    "Chihuahua",
    "Pitbull",
    "Dalmata",
    "San Bernardo"
};

for(let indice = 0; indice = razasDePerros; indice ++){
    console-log(razasDePerros[indice]);
}


for(const raza of razasDePerros){
    console.log(raza);
}
*/

for(const indice in razasDePerros){
    console.log(razasDePerros[indice]);
}

razasDePerros.forEach(raza, indice, arregloOriginal => {
    console.log(raza);
})