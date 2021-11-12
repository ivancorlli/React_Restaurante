import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Register = () => {
    const URL = process.env.REACT_APP_API
    const axios = require('axios')

    const [usuario, setUsuario] = useState({name:'', surname: '', email: '', password: ''})

    const handleChange= ({name, value}) => {
        setUsuario({...usuario, [name]: value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        axios.post(`${URL}register`, usuario)
          .then(function (response) {
            console.log('POST USUARIO',response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    const pagina = 2
    const getData = () => {
        axios.get(`${URL}users?page=${2}`)
        .then(function (response) {
 
            console.log(response.data);
        })
        .catch(function (error) {
   
            console.error(error);
        })
    }

    useEffect(() => {
        getData()

    }, [])

    return (
        <div className='container min-height'>
            <div className='row align-items-center justify-content-center min-height'>
                <div className='col-12 col-md-8 col-lg-6'>
                    <form onSubmit={handleSubmit} className='card p-3'>
                        <div className='form-group'>
                            <label>Nombre</label>
                            <input onChange={(e) => handleChange(e.target) } name='name' className='form-control' type="text" />
                        </div>              
                        <div className='form-group'>
                            <label>Apellido</label>
                            <input onChange={(e) => handleChange(e.target) } name='surname' className='form-control' type="text" />
                        </div>              
                        <div className='form-group'>
                            <label>Email</label>
                            <input onChange={(e) => handleChange(e.target) } name='email' className='form-control' type="email"></input>
                        </div>
                        <div className='form-group'>
                            <label>Contraseña</label>
                            <input onChange={(e) => handleChange(e.target) } name='password' className='form-control' type="password" />
                        </div>
                        <button type='submit' className='btn btn-secondary mt-2'>Registrate</button>
                        <p>¿Ya tenes una cuenta? <Link to="/login">Logueate</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
