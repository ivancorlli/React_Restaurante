import { useState } from "react";
import { createContext } from ("react");


const UserContext = createContext()


const UserProvider = ({children}) => {
    const [token, setToken] = useState(null)
    const data = {token}

    return (
        <UserContext.Provider value={data}>
             {children}
        </UserContext.Provider>
    )
}

export {UserContext}
export default UserProvider

