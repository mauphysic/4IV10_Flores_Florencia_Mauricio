//Problema1

//Problema2

//Problema3
function Problema3(){
    //Primero debemos definir un alfabeto

    var alfabeto = ['A-Z'];

    var p3_input = document.querySelector('#p3-input').value;

    var pe_palabras = p3_input.split(',');

    p3_palabras = p3_palabras.map(function(palabras){
        return palabras.replace(/\s/g, ' ').toUppercase()
    });

    var p3_respuesa = '';

    p3_palabras.forEach(function(palabra, i){
        var letras_unicas = [];
        var palabras_array = palabra.split('');

        alfabeto.forEach(function(letra, j){

            palabras_array.forEach(function(letras_palabras, k){
                if(letras_palabras == letra){
                    if(letras_unicas.indexOf(letra)<0){
                        letras_unicas.push(letra);
                    }
                }
            });
        });
        p3_res += 'Palabra: ' + palabra + ' = ' + letras_unicas.length + '\n';
    });
    document.querySelector('#p3-output').textContent = p3_res;
}