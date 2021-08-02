import  React,{useState} from 'react'
import Proyecto from './Proyecto'
import CrearProyecto from './CrearProyecto'

const MostrarProyectos = () => {
    const [Project,setProject]= useState([
        {nombre: 'Tienda Virtual'},
        {nombre: 'Intranet'},
        {nombre: 'Diseño Sitio Web'}
        ])

    const NewPro = name => {
        if (name == ''){
            alert("Campos vacios")
            return;
        }
        if (!Project.find(Pj => Pj.nombre === name)){
            setProject([...Project, {nombre: name}])
        }else{
            alert("El nombre es igual a otro proyecto")
        }
    }

    return (
        <div>
            <CrearProyecto New= {NewPro}/>
            <h3 className="text-light border-bottom fw-bold">Panel De Proyectos</h3>
            <div className="list-group">
                {Project.map (project =>(
                    <Proyecto project = {project}/>    
                ))}
            </div>
        </div>
    )
}

export default MostrarProyectos