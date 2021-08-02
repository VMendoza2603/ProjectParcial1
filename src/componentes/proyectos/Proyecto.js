import React from 'react'

const Proyecto =({project})=> {
    return (
        <button className = "list-group-item list-group-item-action list-group-item-light" type="buttom">
        {project.nombre}</button>
    )
}

export default Proyecto;
