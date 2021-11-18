import { Route, Routes  } from "react-router-dom"
import Menus from "./menus/Menus"
import { Sidebar } from "./Sidebar/Sidebar"
import Usuarios from "./usuarios/Usuarios"



const Admin = () => {
    return (
        <>  
            
            <Sidebar/>
            <Routes >
                <Route path='/admin/menus' element={<Menus/>} />
                <Route path='/admin/mensajeria' element={<Menus/>} />
                <Route path='/admin/usuarios' element={<Usuarios/>} />
                <Route path='/admin/config' element={<Menus/>} />
            </Routes >
        </>
    )
}

export default Admin
