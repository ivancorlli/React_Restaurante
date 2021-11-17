import { useEffect, useState } from "react";
import { getUsers } from "../../../../helpers/getUsers";
import UserItem from "./UserItem"



const Usuarios = () => {
    const [users, setUsers] = useState([])
    const [info, setInfo] = useState(null)
    async function fetchData(){
        try{
            let {data} = await  getUsers();
            if(data.ok){
                setUsers(data.users)
            }else{
                console.log(false)
            }
        }catch(err){
            return err
        }
        }
        useEffect(() => {
            fetchData()
    }, [])
    
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
                            <div className="table-responsive">
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
                                    users
                                    ?
                                    users.map(user=><UserItem user={user} key={user._id}/>)
                                    :
                                    <tr></tr>
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