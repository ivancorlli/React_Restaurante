import { Navigate } from 'react-router-dom'
import useUser from '../hooks/useUser'

export const AdminRoute = ({children}) => {

    const {userSession} = useUser()
    return userSession && userSession.role === 'ADMIN'
               ?
            children
                :
            <Navigate  to='/'/>

           
}

export default AdminRoute
