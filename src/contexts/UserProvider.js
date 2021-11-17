import { useEffect, useState } from "react";
import getLogin from "../helpers/getLogin";
import { createContext } from "react";


const UserContext = createContext()
const initialInfo ={
    ok:false,
    msg:'',
}


const UserProvider = ({children}) => {
    const [userSession, setUserSession] = useState(JSON.parse(localStorage.getItem('userSession')) || null)
    const [loginInfo, setLoginInfo] = useState(initialInfo)
    const data = {userSession,loginInfo,setUserSession, login, logout}

    async function login (user, pass){
            let response = await getLogin(user,pass);
            let info = {
                ok: response.ok,
                msg: response.msg,
            }
            if(response.ok){
                let {payload} = response
                let data = {
                    role:payload.role,
                    active:payload.active,
                    expiresIn : Date.now() + 1500 * 1000,
                }
                setUserSession(data);
                setLoginInfo(info)
                localStorage.setItem('userSession', JSON.stringify(data));
            }else{
                let info = {
                    ok: response.ok,
                    msg: response.msg
                }
                setLoginInfo(info)
            }
    }

   function logout(){
        setLoginInfo(initialInfo);
        localStorage.removeItem('userSession')
    }

    function logoutTimer (){
        let userSession = JSON.parse(localStorage.getItem('userSession'));
        if(userSession && (userSession.expiresIn === Date.now() || userSession.expiresIn < Date.now() )){
            logout()
            console.log('cerrada la Session por timer')
        }
    }

    useEffect(()=>{
        logoutTimer()
    },[])

    return (
        <UserContext.Provider value={data}>
             {children}
        </UserContext.Provider>
    )
}

export {UserContext}
export default UserProvider

