import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import NavBarTranca from '../components/NavBar/NavBarTranca'
import Home from '../components/pages/Home/home'
import Error404  from "../components/pages/Error404";


const AppRouter = () => {
    return (
        <Router>
            <NavBarTranca/>
            <Switch>
                <Route exact path='/login' component={Login}  />
                <Route exact path='/register' component={Register}  />
                <Route exact path='/' component={Home}  />
                <Route exact path='*' component={Error404} />
            </Switch>
        </Router>
    )
}

export default AppRouter
