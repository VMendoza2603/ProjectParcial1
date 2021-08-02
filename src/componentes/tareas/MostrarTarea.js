import Tarea from './Tarea'
import FormularioTareas from './FormularioTareas'
import  React,{Fragment, useState} from 'react'

const MostrarTareas =()=> {
    const [tareas,setTareas]= useState([
        {nombre: 'Elegir Sistema Operativo',estado:true},
        {nombre: 'Elegir Base de Datos',estado:false},
        {nombre: 'Elegir Lenguaje',estado:true},
        {nombre: 'Elegir Frameworks',estado:false}]
        )
    
    const CreateT = name => {
        if (name == ''){
            alert("Campos vacios")
            return;
        }if (!tareas.find(T => T.nombre === name)){
            setTareas([...tareas,{nombre:name,estado:false}])
            return;
        }else{
            alert("El nombre es igual a otra tarea")
        }
    }

    return (
        <Fragment>
            <div className="row d-flex justify-content-center mb-4">
                    <div className="col-md-6">
                        <FormularioTareas create= {CreateT}/>
                    </div>
                </div>
            <div className="bg-light min-vh-100">
                <div className="">
                    <div className="d-flex justify-content-center">
                        <h2 className="m-2"><span className="text-danger">Proyecto:</span> Comercio Electrónico</h2>
                        <button type="buttom" className="btn btn-outline-danger h-50 m-2">Eliminar Proyecto</button>
                    </div>
                    {tareas.length===0 ?
                        (<h1>Sin Tarea</h1>):
                        (<div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Tarea</th>
                                        <th scope="col">Estado</th>
                                        <th scope="col">Editar</th>
                                        <th scope="col">Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tareas.map(Ts =>
                                        (<Tarea Ts = {Ts}/>   
                                    ))}
                                </tbody>
                            </table>
                        </div>)
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default MostrarTareas;