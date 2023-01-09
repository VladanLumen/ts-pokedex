import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = () =>{
    const [auth, setAuth] = useState({});

    return(
        <AuthContext.Provider value={{auth, setAuth}}>
        </AuthContext.Provider>
    )
}

export default AuthContext