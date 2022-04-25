import { createContext } from "react"
import { useState } from "react"
export const AuthContext=createContext()

export const AuthContextProvider=({children})=>{

    const [isAuth,setAuth]=useState(false)
const handle=(state)=>{
    
        setAuth(state)
    
}

    return(
        <AuthContext.Provider value={{isAuth,handle}}>
          {children}
        </AuthContext.Provider>
    )
}