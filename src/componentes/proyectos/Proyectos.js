import React from 'react'
import MenuVertical from '../plantilla/MenuVertical'
import Header from '../plantilla/Header'
//import FormularioTarea from '../tareas/FormularioTarea'
import MostrarTareas from './../tareas/MostrarTarea';

const Proyectos =()=> {
    return (
        <div className= "container-fuild">
            <div className = "row min-vh-100 text-white">
                <div className = "col-md-3 bg-secondary bg-gradient m-0 p-0">
                    <MenuVertical/>
                </div>
                <div class=" col-md-9 m-0 p-0">
                    <Header/>
                    <main className="text-center text-dark">
                        <MostrarTareas/>  
                    </main>
                </div>
            </div>
        </div>  
    )
}

export default Proyectos;
