import React,{useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Cuenta = (props) => {
    const [usuario, guardarUsuario]=useState({
        nombre:'',
        email:'',
        password:'',
        confirmar:''
    })
    const {nombre, email, password, confirmar}= usuario;
    const onChange = e =>{
        guardarUsuario({
            ...usuario,
            [e.target.name]:e.target.value})
    }
    //Iniciar sesion del usuario
    const onSubmit = e =>{
        e.preventDefault();
        //Validacion de campos vacios
        if(nombre.trim() === '' || email.trim() === '' || 
            password.trim() === '' || confirmar.trim() === ''){
            //mostrarAlertas('Todos los campos son obligatorios','alertas-error')
            alert('Todos los campos son obligatorios');
            return;
            }
        //Possword minimo de 6 caracteres
        if(password.length < 6){
            alert('La contraseña debe de ser de al menos 6 caracteres');
            return;
        }
        //Validar que las contraseñas sean iguales
        if(password != confirmar){
            alert('Las contraseñas no son iguales', 'alerta-error');
            return;
        }
    }
    return (
        <div className='container'>
            <div className="row d-flex justify-content-center mt-5" >
                <div className="col-10 col-sm-8 col-md-6 col-lg-4" >
                    <div class="card border-dark border-2 bg-gradient min-vw-50" Style="background-color: #26417D ">
                        <div class="card-body">
                            <h2 className="text-center text-light" >Crear cuenta</h2>
                            <form onSubmit={onSubmit} >
                                <div className='row'>
                                <div className='col-md-12'>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text text-danger fs-4 fw-bold" ><img src="https://img.icons8.com/color/25/000000/user.png"/></span>
                                        </div>
                                        <input
                                            type="nombre"
                                            className="form-control"
                                            placeholder="Nombre"
                                            name="nombre"
                                            aria-describedby="basic-addon1"
                                            value={nombre}
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                                </div>
                                <div className='row'>
                                <div className='col-md-12'>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text text-danger fs-4 fw-bold" ><img src="https://img.icons8.com/emoji/25/000000/e-mail.png"/></span>
                                        </div>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email"
                                            name="email"
                                            aria-describedby="basic-addon2"
                                            value={email}
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                                </div>
                                <div className='row'>
                                <div className='col-md-12'>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text text-danger fs-4 fw-bold"><img src="https://img.icons8.com/fluent/25/000000/show-password.png"/></span>
                                        </div>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                            name="password"
                                            aria-describedby="basic-addon3"
                                            value={password}
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                                </div>
                                <div className='row'>
                                <div className='col-md-12'>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text text-danger fs-4 fw-bold" ><img src="https://img.icons8.com/fluent/25/000000/re-enter-pincode.png"/></span>
                                        </div>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Confirmar Password"
                                            name="confirmar"
                                            aria-describedby="basic-addon4"
                                            value={confirmar}
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6 text-center'>
                                        <div className="campo-form">
                                            <input type="submit" className="btn btn-dark btn-gradient" value="Crear cuenta"/>
                                        </div>
                                    </div>
                                    <div className='col-md-6 text-center'>
                                        <Link to={'/'} className="btn btn-outline-light btn-gradient" >
                                            Iniciar sesion 
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Cuenta

