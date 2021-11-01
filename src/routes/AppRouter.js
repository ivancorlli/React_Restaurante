import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";




const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/login' component={Login}  />
                <Route exact path='/register' component={Register}  />
                <Route exact path='/'  />
                <Route exact path='*'  />
            </Switch>1
        </Router>
    )
}

export default AppRouter
