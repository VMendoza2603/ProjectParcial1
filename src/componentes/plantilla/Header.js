import React,{useState} from 'react'
//rafce
const Header = () => {
    const [user, setUser] = useState(true)

    const login = () => {
      setUser({id:1,nombre:"Mendoza-Martinez-MartinezD"})
    }
    const logout = () => {
      setUser(null)
    }
    return (
        <header className="d-flex justify-content-between p-4 bg-gradient" Style="background-color: #26417D " >
            <span className='navbar-brand mb-0 fs-4 text-white'>User:{user? " Mendoza-Martinez-MartinezD":" Desconocido"}</span>
            <nav>
                <div className='container-fluid'>
                    {user 
                        ? (<button 
                            className="btn btn-outline-success text-light" 
                            type="Button" 
                            onClick = {logout} >Cerrar Sesion
                        </button>)
                        : (<button 
                            className="btn btn-outline-success text-light" 
                            type="Button" 
                            onClick = {login} >Iniciar Sesion
                        </button>)
                    }
                </div>    
            </nav>
        </header>
    )
}

export default Header
