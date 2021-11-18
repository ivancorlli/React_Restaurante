import React from 'react'
import { Navigate } from 'react-router-dom'
import useUser from '../hooks/useUser'

export const PublicRoute = ({children}) => {

    const {userSession} = useUser()
    return  !userSession
                ?
             children
                :
            <Navigate  to='/'/>
    }

export default PublicRoute