import { Redirect, Route} from 'react-router'
import useUser from '../hooks/useUser'

export const AdminRoute = ({component: Component, ...rest}) => {

    const {userSession} = useUser()
    return (
        <>
        <Route {...rest}/>
           {userSession && userSession.role === 'ADMIN'
               ?
            (<Component/>)
                :
            (<Redirect to='/'/>)

           }
        </> 
    )
}

export default AdminRoute
