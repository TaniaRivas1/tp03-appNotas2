const process = require('process');

const {agregarNota, actualizarNota, eliminarNota, listarNotas, buscarNota, filtrarNotas} = require('./funcionesDeTarea');

const accion = process.argv[2];

switch (accion) {
    case "agregar":
        let titulo = process.argv[3];
        if(!titulo){
            return console.log("Debes agregar un titulo");
        }
        let listaDeLibros = {
            titulo,
            estado: 'pendiente',
        }
        agregarNota(listaDeLibros)
        break;

    case "actualizar":
        let parametro
        if(process.argv[3] !== undefined){
            parametro = process.argv[3].toLowerCase()
            actualizarNota(parametro);
            console.log("Nota actualizada");
        }else{
            return console.log("Debes colocar un titulo existente");
        }
        break;

    case "eliminar" :
        let indica 
        if(process.argv[3] !== undefined){
            indica = process.argv[3].toLowerCase()
            eliminarNota(indica)
            console.log("Libro eliminado");
        }else{
            return console.log("Debes colocar un titulo existente");
        }
            
        break;

    case "listar" :

        listarNotas()
        break;

    case "buscar" : 
    let mayuscula
        if(process.argv[3] !== undefined) {
            mayuscula = process.argv[3].toLowerCase()
            buscarNota(mayuscula);
        }else{
            return console.log("Debes colocar un titulo existente");
        }
        break;

    case "filtrar" :
        let corrector
        if(process.argv[3] !== undefined) {
            corrector = process.argv[3].toLowerCase()
            filtrarNotas(corrector)
        }else{
            return console.log("Debes colocar un titulo existente");
        }
        break;

    case undefined :
            console.log("Debes colocar una accion");
        break;

    default :
            console.log("Esta accion no esta disponible, por favor utiliza cualquiera de las siguientes(agregar, actualizar, eliminar, listar, buscar, filtrar");
        break;
}
