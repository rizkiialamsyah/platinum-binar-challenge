import {useRoutes} from "react-router"
import { privaterouting, publicrouting } from "./router"
import Layout from "../layout"

export const AppPublicRoute = (props) => {
    const routes = useRoutes (publicrouting(props))
    return routes
}

export const AppPrivateRoute = (props) => {
    const routes = useRoutes (privaterouting(props))
    return routes
}

export const AuthProvider = (props) => {
    const isLoggedIn =  false;
    return isLoggedIn ? <Layout {...props}/>:<AppPublicRoute/> 
}