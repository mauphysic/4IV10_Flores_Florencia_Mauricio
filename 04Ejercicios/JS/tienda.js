function validarp(e){
    var teclado = (document.all)? e.keyCode : e.which

    if(teclado == 8) return true

    var letras = /[0-9\d .]/

    var codigo = String.fromCharCode(teclado)
    return letras.test(codigo);
}

function calcularp(){
    var producto = document.getElementById("nombre_p").value;
    var marca = document.getElementById("marca_p").value;
    var tipo = document.getElementById("tipo_p").value;
    var precio = document.getElementById("precio_p").value;

    precio2 = parseInt(precio);

    if(precio > 100 || precio == 0 || precio.length == 0 || producto.length == 0 || marca.length == 0 || tipo.length == 0){
        alert("Introduce valores válidos")
        return false;
    }

    switch(producto){
        case "Doritos":
            if(tipo != "papas" && tipo != "Papas" || marca != "sabritas" && marca != "Sabritas"){
                alert("Introduce un valor correcto")
                return false;
            }
            var descuento = precio2 * 0.02;
            var total = precio2 - descuento;
            break;

            case "doritos":
                if(tipo != "papas" && tipo != "Papas" || marca != "sabritas" && marca != "Sabritas"){
                    alert("Introduce un valor correcto")
                    return false;
                }
                var descuento = precio2 * 0.02;
                var total = precio2 - descuento;
                break;
        case "Sabritas":
            if(tipo != "papas" && tipo != "Papas" || marca != "sabritas" && marca != "Sabritas"){
                alert("Introduce un valor correcto")
                return false;
            }
            var descuento = precio2 * 0.02;
            var total = precio2 - descuento;
            break;
            
            case "sabritas":
                if(tipo != "papas" && tipo != "Papas" || marca != "sabritas" && marca != "Sabritas"){
                    alert("Introduce un valor correcto")
                    return false;
                }
                var descuento = precio2 * 0.02;
                var total = precio2 - descuento;
                break;
        case "Chetos":
            if(tipo != "papas" && tipo != "Papas" || marca != "sabritas" && marca != "Sabritas"){
                alert("Introduce un valor correcto")
                return false;
            }
            var descuento = precio2 * 0.02;
            var total = precio2 - descuento;
            break;

            case "chetos":
                if(tipo != "papas" && tipo != "Papas" || marca != "sabritas" && marca != "Sabritas"){
                    alert("Introduce un valor correcto")
                    return false;
                }
                var descuento = precio2 * 0.02;
                var total = precio2 - descuento;
                break;

        case "Takis":
            if(tipo != "papas" && tipo != "Papas" || marca != "barcel" && marca != "Barcel"){
                alert("Introduce un valor correcto")
                return false;
            }
            var descuento = precio2 * 0.02;
            var total = precio2 - descuento;
            break;

            case "takis":
                if(tipo != "papas" && tipo != "Papas" || marca != "barcel" && marca != "Barcel"){
                    alert("Introduce un valor correcto")
                    return false;
                }
                var descuento = precio2 * 0.02;
                var total = precio2 - descuento;
                break;

        case "Pake-Taxo":
            if(tipo != "papas" && tipo != "Papas" || marca != "sabritas" && marca != "Sabritas"){
                alert("Introduce un valor correcto")
                return false;
            }
            var descuento = precio2 * 0.02;
            var total = precio2 - descuento;
            break;

            case "pake-Taxo":
                if(tipo != "papas" && tipo != "Papas" || marca != "sabritas" && marca != "Sabritas"){
                    alert("Introduce un valor correcto")
                    return false;
                }
                var descuento = precio2 * 0.02;
                var total = precio2 - descuento;
                break;

            case "Pake-taxo":
                if(tipo != "papas" && tipo != "Papas" || marca != "sabritas" && marca != "Sabritas"){
                    alert("Introduce un valor correcto")
                    return false;
                }
                var descuento = precio2 * 0.02;
                var total = precio2 - descuento;
                break;

            case "pake-taxo":
                if(tipo != "papas" && tipo != "Papas" || marca != "sabritas" && marca != "Sabritas"){
                alert("Introduce un valor correcto")
                return false;
                }
                var descuento = precio2 * 0.02;
                var total = precio2 - descuento;
                break;

        case "Chips":
            if(tipo != "papas" && tipo != "Papas" || marca != "barcel" && marca != "Barcel"){
                alert("Introduce un valor correcto")
                return false;
            }
            var descuento = precio2 * 0.02;
            var total = precio2 - descuento;
            break;

            case "chips":
                if(tipo != "papas" && tipo != "Papas" || marca != "barcel" && marca != "Barcel"){
                    alert("Introduce un valor correcto")
                    return false;
                }
                var descuento = precio2 * 0.02;
                var total = precio2 - descuento;
                break;

        case "Pingüinos":
            if(tipo != "pastelito" && tipo != "Pastelito" || marca != "marinela" && marca != "Marinela"){
                alert("Introduce un valor correcto")
                return false;
            }
            var descuento = precio2 * 0.1;
            var total = precio2 - descuento;
            break;

            case "pingüinos":
                if(tipo != "pastelito" && tipo != "Pastelito" || marca != "marinela" && marca != "Marinela"){
                    alert("Introduce un valor correcto")
                    return false;
                }
                var descuento = precio2 * 0.1;
                var total = precio2 - descuento;
                break;

        case "Gansito":
            if(tipo != "pastelito" && tipo != "Pastelito" || marca != "marinela" && marca != "Marinela"){
                alert("Introduce un valor correcto")
                return false;
            }
            var descuento = precio2 * 0.1;
            var total = precio2 - descuento;
            break;

            case "gansito":
                if(tipo != "pastelito" && tipo != "Pastelito" || marca != "marinela" && marca != "Marinela"){
                    alert("Introduce un valor correcto")
                    return false;
                }
                var descuento = precio2 * 0.1;
                var total = precio2 - descuento;
                break;

        case "Choco-roles":
            if(tipo != "pastelito" && tipo != "Pastelito" || marca != "marinela" && marca != "Marinela"){
                alert("Introduce un valor correcto")
                return false;
            }
            var descuento = precio2 * 0.1;
            var total = precio2 - descuento;
            break;

            case "Choco-Roles":
                if(tipo != "pastelito" && tipo != "Pastelito" || marca != "marinela" && marca != "Marinela"){
                    alert("Introduce un valor correcto")
                    return false;
                }
                var descuento = precio2 * 0.1;
                var total = precio2 - descuento;
                break;

                case "choco-Roles":
                    if(tipo != "pastelito" && tipo != "Pastelito" || marca != "marinela" && marca != "Marinela"){
                        alert("Introduce un valor correcto")
                        return false;
                    }
                    var descuento = precio2 * 0.1;
                    var total = precio2 - descuento;
                    break;

                    case "choco-roles":
                        if(tipo != "pastelito" && tipo != "Pastelito" || marca != "marinela" && marca != "Marinela"){
                            alert("Introduce un valor correcto")
                            return false;
                        }
                        var descuento = precio2 * 0.1;
                        var total = precio2 - descuento;
                        break;

        case "Leche":
            if(tipo != "lacteo" && tipo != "Lacteo" && tipo != "lácteo" && tipo != "Lácteo" || marca != "Lala" && marca != "lala" && marca != "Alpura" && marca != "alpura" && marca != "Santa clara" && marca != "santa clara"){
                alert("Introduce un valor correcto")
                return false;
            }
            var descuento = precio2 * 0.075;
            var total = precio2 - descuento;
            break;

            case "leche":
                if(tipo != "lacteo" && tipo != "Lacteo" && tipo != "lácteo" && tipo != "Lácteo" || marca != "Lala" && marca != "lala" && marca != "Alpura" && marca != "alpura" && marca != "Santa clara" && marca != "santa clara"){
                    alert("Introduce un valor correcto")
                    return false;
                }
                var descuento = precio2 * 0.075;
                var total = precio2 - descuento;
                break;

        case "Yogurt":
            if(tipo != "lacteo" && tipo != "Lacteo" && tipo != "lácteo" && tipo != "Lácteo" || marca != "Lala" && marca != "lala" && marca != "Alpura" && marca != "alpura" && marca != "Santa clara" && marca != "santa clara"){
                alert("Introduce un valor correcto")
                return false;
            }
            var descuento = precio2 * 0.075;
            var total = precio2 - descuento;
            break;

            case "yogurt":
                if(tipo != "lacteo" && tipo != "Lacteo" && tipo != "lácteo" && tipo != "Lácteo" || marca != "Lala" && marca != "lala" && marca != "Alpura" && marca != "alpura" && marca != "Santa clara" && marca != "santa clara"){
                    alert("Introduce un valor correcto")
                    return false;
                }
                var descuento = precio2 * 0.075;
                var total = precio2 - descuento;
                break;

        case "Queso":
            if(tipo != "lacteo" && tipo != "Lacteo" && tipo != "lácteo" && tipo != "Lácteo" || marca != "Lala" && marca != "lala" && marca != "Alpura" && marca != "alpura" && marca != "Santa clara" && marca != "santa clara"){
                alert("Introduce un valor correcto")
                return false;
            }
            var descuento = precio2 * 0.075;
            var total = precio2 - descuento;
            break;

            case "queso":
                if(tipo != "lacteo" && tipo != "Lacteo" && tipo != "lácteo" && tipo != "Lácteo" || marca != "Lala" && marca != "lala" && marca != "Alpura" && marca != "alpura" && marca != "Santa clara" && marca != "santa clara"){
                    alert("Introduce un valor correcto")
                    return false;
                }
                var descuento = precio2 * 0.075;
                var total = precio2 - descuento;
                break;
    

        case "Crema":
            if(tipo != "lacteo" && tipo != "Lacteo" && tipo != "lácteo" && tipo != "Lácteo" || marca != "Lala" && marca != "lala" && marca != "Alpura" && marca != "alpura" && marca != "Santa clara" && marca != "santa clara"){
                alert("Introduce un valor correcto")
                return false;
            }
            var descuento = precio2 * 0.075;
            var total = precio2 - descuento;
            break;

            case "crema":
                if(tipo != "lacteo" && tipo != "Lacteo" && tipo != "lácteo" && tipo != "Lácteo" || marca != "Lala" && marca != "lala" && marca != "Alpura" && marca != "alpura" && marca != "Santa clara" && marca != "santa clara"){
                    alert("Introduce un valor correcto")
                    return false;
                }
                var descuento = precio2 * 0.075;
                var total = precio2 - descuento;
                break;

        default:
            alert("No se encontró el producto o se introdujo un valor inválido");
            return false;
            break;
    }

    document.getElementById("precio_f").value = "$ " + total;
}

function del3(){
    document.getElementById("nombre_p").value = "";
    document.getElementById("marca_p").value = "";
    document.getElementById("tipo_p").value = "";
    document.getElementById("precio_p").value = "";
    document.getElementById("precio_f").value = "";
}