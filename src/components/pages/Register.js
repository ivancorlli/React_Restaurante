import { useState } from "react"
import { Link } from "react-router-dom"

const Register = () => {
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('')
    const [nombre, setNombre] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const usuario ={email, password, nombre} 
        console.log(usuario)
      }

    return (
        <div className='container min-height'>
            <div className='row align-items-center justify-content-center min-height'>
                <div className='col-12 col-md-8 col-lg-6'>
                    <form onSubmit={handleSubmit} className='card p-3'>
                        <div className='form-group'>
                            <label>Nombre</label>
                            <input onChange={ (e) => setNombre(e.target.value) } className='form-control' type="nombre" />
                        </div>              
                        <div className='form-group'>
                            <label>Email</label>
                            <input onChange={(e) => setEmail(e.target.value) } className='form-control' type="email"></input>
                        </div>
                        <div className='form-group'>
                            <label>Contraseña</label>
                            <input onChange={(e) => setPassword(e.target.value) } className='form-control' type="password" />
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
