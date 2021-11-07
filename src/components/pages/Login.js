import { useState } from "react"

const Login = () => {
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const usuario ={email, password} 
    console.log(usuario)
  }
  return (
    <div className='container min-height'>
      <div className='row align-items-center justify-content-center min-height'>
        <div className='col-12 col-md-8 col-lg-6'>
          <form onSubmit={handleSubmit} className='card p-3'>
            <div className='form-group'>
              <label>Email</label>
              <input onChange={(e) => setEmail(e.target.value) } className='form-control' type="email" />
            </div>
            <div className='form-group'>
              <label>Contraseña</label>
              <input onChange={(e) => setPassword(e.target.value) } className='form-control' type="password" />
            </div>
            <button type='submit' className='btn btn-secondary mt-2'>Iniciar sesión </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login
