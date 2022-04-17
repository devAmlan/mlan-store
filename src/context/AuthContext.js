import React, { useState,createContext } from 'react'
const AuthContext = createContext()
function AuthProvider({children}) {
  const [authuserdata,setAuthuserdata] = useState({})
  console.log(authuserdata)
  return (
    <>
    <AuthContext.Provider value={{authuserdata,setAuthuserdata}}>
    {children}
    </AuthContext.Provider>
    </>
  )
}

export {AuthProvider,AuthContext}