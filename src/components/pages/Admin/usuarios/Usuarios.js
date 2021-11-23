import { useEffect, useState } from "react";
import { delUser } from "../../../../helpers/delUser";
import { getUsers } from "../../../../helpers/getUsers";
import UserItem from "./UserItem"



const Usuarios = () => {
    const [users, setUsers] = useState([])
    const [info, setInfo] = useState(null)
    const [search, setSearch] = useState('')
    const [userSearch, setUserSearch] = useState([])

    function handleSearch (e){
        setSearch(e.target.value);
        if(users && search.length >= 3){
           let user = users.filter(el=> el.name==search)
           if(user.length > 1){
               setUserSearch(user)
            }else{
            setUserSearch([])
            }
        }
    }

    async function deleteUser(id){
        await delUser(id)
    }


    async function fetchData(){
            let response = await  getUsers();
            let {data} = response;
            if(data && data.ok){
                setUsers(data.users)
            }else{
                setInfo({
                    ok:response.ok,
                    msg: response.msg
                })
            }
        }
        useEffect(() => {
            fetchData()
    }, [deleteUser])
    
    return (
        <>
            <div className='container  my-3'>
                <div className='row my-1 p-sm-3'>
                <form className="d-flex  justify-content-center">
                <input className="form-control m-1 w-50" name='search' type="search" onChange={handleSearch} placeholder="Buscar Usuario" aria-label="Search"/>
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
                                    <th>Borrar</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        info
                                        ?
                                        <h2>{info.msg}</h2>
                                        :
                                            userSearch.length > 1
                                            ?
                                            userSearch.map(user=><UserItem user={user} key={user._id} deleteUser={deleteUser}/>)
                                            :
                                                users
                                                ?
                                                users.map(user=><UserItem user={user} key={user._id} deleteUser={deleteUser}/>)
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