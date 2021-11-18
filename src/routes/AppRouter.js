import { BrowserRouter, Routes  , Route } from "react-router-dom";
import Admin from "../components/pages/Admin/Admin";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import AdminRoute from "./AdminRoute";
import PublicRoute from "./PublicRoute";




const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes >
                <Route path='/admin' element={
                    <AdminRoute>
                        <Admin/>
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
                <Route exact path='/'  />
                <Route exact path='*'  />
            </Routes >
        </BrowserRouter>
    )
}

export default AppRouter
