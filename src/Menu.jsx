import React from 'react';
import "./index.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";


const Menu = () => {
    return(

        <>
        <div style={{ backgroundColor: 'yellow'}} class ='mt-3'>
        <NavLink exact activeClassName="active_class" to='/'> Home </NavLink>&nbsp;
        <NavLink exact activeClassName="active_class" to='/secondpage'> Customers </NavLink>
        </div>

        </>
       
    );
}


export default Menu;