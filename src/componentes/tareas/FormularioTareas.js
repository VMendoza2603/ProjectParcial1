import React,{useState} from 'react'

const FormularioTarea=({create}) =>{
    const [New, setNew] = useState('')

    const NewT = e => setNew(e.target.value)

    const Click = () =>{
        create(New)
        setNew('')
    }
    return (
        <div className="border border-light p-1 mt-2">
            <h2 className="text-light fw-bold fs-1 text-center mb-0 mt-2">Formulario de Tareas
            </h2>
            <form className="">
                <div className="row">
                    <div className="col-md-12">
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text text-danger fs-2 fw-bold" ><img src="https://img.icons8.com/cute-clipart/35/000000/task.png"/></span>
                            </div>
                            <input 
                            type="text"
                            className="form-control fs-2"
                            placeholder="Nombre Tarea"
                            name="tarea"
                            value = {New}
                            onChange= {NewT}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center mb-4">
                        <div className="d-grid">
                            <button type="button" className="btn bg-gradient text-light fs-2" Style="background-color: #26417D " onClick={Click}>Guardar Tarea</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>  
    )
}

export default FormularioTarea;