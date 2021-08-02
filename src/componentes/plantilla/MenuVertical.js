import React from 'react';
import MostrarProyectos from '../proyectos/MostrarProyectos';

function MenuVertical() {
    return (
        <aside className="text-center p-4">
            <h2 className="fst-italic text-info bg-gradient fw-bold p-4" Style="background-color:#26417D">Gestor<spam className="text-danger">Proyectos</spam></h2>
            <MostrarProyectos/>
         </aside>
        )
}
export default MenuVertical;
