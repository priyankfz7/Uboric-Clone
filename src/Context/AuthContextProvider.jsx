import React from "react";
export const AuthContext=React.createContext();
const int={
    isAuth:false,
    email:"",
    password:""
}
const AuthContextProvider=({children})=>{
    const [authState,setAuth]=React.useState(int);
    const login=(e,p)=>{
        setAuth({email:e,password:p,isAuth:true})
    }
    const logout=()=>{
        setAuth(int);
    }
    return (
        <AuthContext.Provider value={{authState,login,logout}}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthContextProvider