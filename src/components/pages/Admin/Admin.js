import { Route, Switch } from "react-router-dom"
import Menus from "./menus/Menus"
import { Sidebar } from "./Sidebar/Sidebar"
import Usuarios from "./usuarios/Usuarios"



const Admin = () => {
    return (
        <>  
            
            <Sidebar/>
            <Switch>
                <Route path='/admin/menus' component={Menus} />
                <Route path='/admin/mensajeria' component={Menus} />
                <Route path='/admin/usuarios' component={Usuarios} />
                <Route path='/admin/config' component={Menus} />
            </Switch>
        </>
    )
}

export default Admin
