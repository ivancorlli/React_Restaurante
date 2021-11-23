import { useState, useEffect } from "react"
import useUser from "../../hooks/useUser"


const initialUser = {
  email:'',
  password:'',
}


const Login = () => {
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')
  const {login,loginInfo} = useUser() 

  const handleSubmit = async (e) => {
    e.preventDefault()
      await login(email,password)
      setEmail(initialUser.email)
      setPassword(initialUser.password)
  }

  
  useEffect(() => {
    return () => {
    }
}, [])


  return (
    <div className='container min-height'>
      <div className='row align-items-center justify-content-center min-height'>
        <div className='col-12 col-md-8 col-lg-6'>
          <form onSubmit={handleSubmit} className='card p-3'>
            <div className='form-group'>
              <label>Email</label>
              <input onChange={(e) => setEmail(e.target.value) } value={email} className='form-control' type="email" />
            </div>
            <div className='form-group'>
              <label>Contraseña</label>
              <input onChange={(e) => setPassword(e.target.value) } value={password} className='form-control' type="password" />
            </div>
            <button type='submit' className='btn btn-secondary mt-2'>Iniciar sesión </button>
          </form>
        </div>
        {
          !loginInfo.ok && (
            <h1>{loginInfo.msg}</h1>
          )
 
        }
      </div>
    </div>
  )
}
export default Login ;