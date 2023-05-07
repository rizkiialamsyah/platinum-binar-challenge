import React from "react";
import Header from "./header";
import SideBar from "./sidebar/Index";
import { AppPrivateRoute } from "../config";

const Layout = () => {
    return (
        <div className="template-areas">
         <SideBar/>
         <div className="w-100">
         <Header/>
         <AppPrivateRoute/>
       </div>
        </div>
    )
}

export default Layout