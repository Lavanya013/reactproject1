import "./index.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";


const Mainpage = () => {


    return (
        <>

            <div style={{ backgroundColor: 'royalblue', width: '100vw', height: '100vh' }} class=' bg-center text-center full-width cover-full my-0 mt-0'>
                <div class="card-body">
                    <h1 style={{ backgroundColor: 'yellow',color:'royalblue'}}class="btn btn-primary btn-lg active text-center cover-full"><a href="/secondpage">Home Network Solutions</a></h1>
                    <p style={{ backgroundColor: 'yellow',color:'royalblue' }}class="btn btn-primary btn-lg active text-center cover-full">A home network allows computer owners to interconnect multiple computers so that each can share files, programs, printers, other peripheral devices, and Internet access with other computers, reducing the need for redundant equipment and, in general, making everything easier to use.</p>

                </div>
                <NavLink to="/secondpage">

                    <img class="btn btn-outline-dark" src="/images/Home.png" alt="" />
                </NavLink>
            </div>

        </>

    );
}


export default Mainpage;