import React, { useState } from 'react';

const CrearProyecto = ({New}) => {
    const [formulario,setFormulario] = useState(false)

    const activarFormulario = () => {
        setFormulario(!formulario)
    }

    const[Registre,setRegistre] = useState('')
    
    const Valor = e => {setRegistre(e.target.value)}

    const Click = () => {
        New(Registre)
        setRegistre('')
    }
    
    return (
        <>
            <div className ="d-grid pb-3">
                <button className="btn btn-outline-light text-warning fw-bold fs-2 pt-0"
                type="button"
                onClick={activarFormulario}
                >Nuevo Proyecto</button>
            </div>
            {formulario
                ?(<form>
                    <div className = 'row'>
                        <div className = 'col-md-12'>
                            <div className = "input-group my-2">
                                <div className = "input-group-prepend">
                                    <span className="input-group-text text-danger fs-2 fw-bold"><img src="https://img.icons8.com/color/35/000000/group-of-projects.png"/></span>
                                </div>
                                <input
                                type="text"
                                className="form-control fs-2"
                                placeholder="Nombre proyecto"
                                name="nombre"
                                value = {Registre}
                                onChange={Valor}
                                />
                            </div>
                        </div>
                    </div>
                    <div className ='row'>
                        <div className='col-md-12 text-center mb-4'>
                            <div className="d-grid">
                                <button type="button" className="text-white btn fs-2 bg-gradient" Style="background-color: #26417D" onClick={Click}>Guardar Proyecto </button>
                            </div>
                        </div>
                    </div>
                </form>):null
            }
        </>
    )
}
export default CrearProyecto;