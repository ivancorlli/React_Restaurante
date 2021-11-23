import { BrowserRouter, Routes  , Route } from "react-router-dom";
import Contact from "../components/Contact/Contact";
import About from "../components/pages/about";
import Menus from "../components/pages/Admin/menus/Menus";
import Usuarios from "../components/pages/Admin/usuarios/Usuarios";
import Error404 from "../components/pages/Home/Error404";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import AdminRoute from "./AdminRoute";
import PublicRoute from "./PublicRoute";




const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes >
                <Route path='/admin/usuarios' element={
                    <AdminRoute>
                        <Usuarios/>
                    </AdminRoute>
                }/>
                <Route path='/admin/menus' element={
                    <AdminRoute>
                        <Menus/>
                    </AdminRoute>
                }/>
                <Route path='/login' element={
                    <PublicRoute>
                        <Login/>
                    </PublicRoute>
                }/>
                <Route path='/register' element={
                    <PublicRoute>
                        <Register/>
                    </PublicRoute>
                }/>
                <Route exact path='/contact' element={<Contact/>} />
                <Route exact path='/about' element={<About/>} />
                <Route exact path='/' element={<Home/>} />
                <Route exact path='*' element={<Error404/>} />
            </Routes >
        </BrowserRouter>
    )
}

export default AppRouter
