import React from 'react';
import "./index.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



const Kacla = () => {
    return (

        <>
            <div  style={{ backgroundColor: 'royalblue', width: '100vw', height: '100vh' }} className=' bg-center text-center full-width cover-full my-0 mt-0'>


                <img className = 'mt-5' width='1200px' src="/images/Ka_CLA.png" alt="" />

                <div className='text-bottom my-5'>

                    <a href='http://accel.arrisi.com/pages/Racks.aspx?groupID=25&codeTrackID=42&timeframe=0&EndDate=InProgress'>
                        <button  type="button" className="btn btn-dark">ACCEL Link</button>&nbsp;&nbsp;
                    </a>
                    <button  type="button" className="btn btn-dark">CLA Link</button>

                </div>


            </div>

        </>

    );
}


export default Kacla;