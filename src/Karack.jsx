import React from 'react';
import "./index.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";


const Karack = () => {
    return (

        <>
            <div  style={{ backgroundColor: 'royalblue', width: '100vw', height: '100vh' }} class=' bg-center text-center full-width cover-full my-0 mt-0'>
                <NavLink  to="/kahome">

                    <img class = 'mt-5 btn btn-outline-dark' width='1200px' src="/images/Ka_Stability_Rack.png" alt="" />

                </NavLink>

            </div>

        </>

    );
}


export default Karack;