import React from "react";
import cmslogo from "../../assets/images/Rectangle 63.png"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


const SideBar = ()=> {
    return (
    
    <Sidebar className="sidebar-nav">
    <div >
        <img className="cms-logo p-3" src={cmslogo} alt="logo"/>
    </div>
    <Menu>
            <SubMenu label="Dashboard">
      <MenuItem> Dashboard </MenuItem>
    </SubMenu>
    <SubMenu label="Cars">
    <MenuItem> List Car </MenuItem>
    </SubMenu>
  </Menu>
    </Sidebar>
    
    )
}

export default SideBar