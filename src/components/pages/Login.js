

const Login = () => {

    return (
        <div className='container'>
            <form className='card p-3'>
                <div className='form-group'>
                    <label>Email</label>
                    <input className='form-control' type="email" />
                </div>
                <div className='form-group'>
                    <label>Contraseña</label>
                    <input className='form-control' type="password" />
                </div>
            </form>
        </div>
    )
}

export default Login
