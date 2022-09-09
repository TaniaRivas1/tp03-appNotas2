const { notStrictEqual } = require('assert');
const fs = require('fs');

let notas = require('./tareas.json');
const guardarJson = (notas) => {
    fs.writeFileSync('./tareas.json', JSON.stringify(notas, null, 3));
};

const visualizar = (notas) => {
    notas.forEach((nota, index) => {
        console.log(`${index +1} El libro con titulo ${nota.titulo} se encuentra en el estado : ${nota.estado}`);
    })
}


module.exports = {

    agregarNota : (nota) => {
        notas.push(nota);
        guardarJson(notas);
        return console.log("Nota agregada");
    },
        actualizarNota : function (titulo){
            let notasActualizadas = notas.map(nota => {
                if (nota.titulo.toLowerCase() === titulo.toLowerCase()){
                    if (nota.estado.toLowerCase() === "Pendiente".toLowerCase()){
                    nota.estado = "En proceso"
                    return nota 
                    } else if (nota.estado.toLowerCase() === "En proceso".toLowerCase()){
                        nota.estado = "Terminado"
                        return nota
                    }else{
                        return nota
                    }
            }     
            return nota  
        })
        guardarJson(notasActualizadas);
    },
         eliminarNota : (titulo) => {
            let notaEliminada = notas.filter(nota=> 
                nota.titulo.toLowerCase() !== titulo.toLowerCase())
                notas.forEach(nota => {
                    let sin = nota.titulo === titulo;
                    return sin
                })
                guardarJson(notaEliminada)
            
        },
         
        listarNotas : () =>{
           visualizar(notas)
        },
        
        filtrarNotas : (estado) =>{ 
            let notasFiltradas = notas.filter(nota => {
                if(nota.estado.toLowerCase() === estado.toLowerCase()){
                    return nota
                }
            })
            visualizar(notasFiltradas);
        },

        buscarNota : (titulo) =>{
            let notasBuscadas = notas.filter((nota) => {
                return nota.titulo.toLowerCase().includes(titulo.toLowerCase());
            })
        visualizar(notasBuscadas);
        }
    }


