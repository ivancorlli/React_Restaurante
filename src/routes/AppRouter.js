import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import Admin from "../components/pages/Admin/Admin";
// import Login from "../components/pages/Login";
import Register from "../components/pages/Register";




const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path='/admin' component={Admin}  />
                {/* <Route exact path='/login' component={Login}  /> */}
                <Route exact path='/register' component={Register}  />
                <Route exact path='/'  />
                <Route exact path='*'  />
            </Switch>
        </Router>
    )
}

export default AppRouter
