import React from 'react'

const Tarea=({Ts}) =>{
    return (
        <tr>
            <td>{Ts.nombre}</td>
            <td>{Ts.estado ?
                (<button className="btn btn-success">Completada</button>):
                (<button className="btn btn-warning">Incompleta</button>)}</td>
            <td><button className="btn btn-outline-success">Editar</button></td>
            <td><button className="btn btn-outline-danger">Eliminar</button></td>
        </tr>
    )
}
export default Tarea;