import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import Admin from "../components/pages/Admin/Admin";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import AdminRoute from "./AdminRoute";
import PublicRoute from "./PublicRoute";




const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <AdminRoute path='/admin' component={Admin}  />
                <PublicRoute exact path='/login' component={Login}  />
                <PublicRoute exact path='/register' component={Register}  />
                <Route exact path='/'  />
                <Route exact path='*'  />
            </Switch>
        </Router>
    )
}

export default AppRouter
