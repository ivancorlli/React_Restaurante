import UserItem from "./UserItem"

const users = [
    {
    id:43523456345,
    name: "ivan",
    surname: "corlli",
    email: "ivancorlli13@gamil.com",
    role:'USUARIO',
    status: "true",
  },
    {
    id:4352344556345,
    name: "ivan",
    surname: "corlli",
    email: "ivancorlli13@gamil.com",
    role:'USUARIO',
    status: "true",
  },
    {
    id:435234556345,
    name: "ivan",
    surname: "corlli",
    email: "ivancorlli13@gamil.com",
    role:'USUARIO',
    status: "true",
  },
    {
    id:435234536345,
    name: "ivan",
    surname: "corlli",
    email: "ivancorlli13@gamil.com",
    role:'USUARIO',
    status: "true",
  },
];

const Usuarios = () => {
    return (
        <>
            <div className='container  my-3'>
                <div className='row my-1 p-sm-3'>
                <form className="d-flex  justify-content-center">
                <input className="form-control m-1 w-50" type="search" placeholder="Buscar Usuario" aria-label="Search"/>
                <div className=" ms-4 d-flex">
                <button className="btn btn-outline-dark m-1" type="submit">Buscar</button>
                </div>
                 </form> 
                </div>
                    {/* Vista de los menus */}
                    <div className='container my-4'>
                        <div className='row justify-content-center'>
                            <div class="table-responsive">
                            <table className="table table-striped table-hover">
                                <thead>
                                <tr className='text-center'>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    users.map(user=><UserItem user={user} key={user.id}/>)
                                }
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                
            </div>
        </>
    )
}

export default Usuarios