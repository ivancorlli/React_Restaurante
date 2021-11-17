import React from 'react'
import { Redirect, Route} from 'react-router'
import useUser from '../hooks/useUser'

export const PublicRoute = ({component: Component, ...rest}) => {

    const {userSession} = useUser()
    return (
        <>
        <Route {...rest}/>
           {!userSession
               ?
               (<Component/>)
                :
            (
            <Redirect to='/'/>
            )

           }
        </> 
    )
}

export default PublicRoute