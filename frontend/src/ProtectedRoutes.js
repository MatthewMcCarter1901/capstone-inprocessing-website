import { useState, useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { Login } from "./Login"
import { NotAuthorized } from "./NotAuthorized"
import { GlobalContext } from "./App"


// export const ProtectedRoutes = () => {
 


//     return loggedIn ? <Outlet /> : <NotAuthorized/>



// }