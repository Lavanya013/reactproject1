import React from 'react';
import "./index.css"
import { NavLink } from "react-router-dom";

const definition = "A home network or home area network (HAN) is a type of computer network that facilitates communication among devices within the close vicinity of a home. Devices capable of participating in this network, for example, smart devices such as network printers and handheld mobile computers, often gain enhanced emergent capabilities through their ability to interact. These additional capabilities can be used to increase the quality of life inside the home in a variety of ways, such as automation of repetitive tasks, increased personal productivity, enhanced home security, and easier access to entertainment."
function Secondpage() {
    return (
        <>

        <div style = {{backgroundColor: 'white'}}>
        <h1 class="btn btn-primary btn-lg active text-center cover-full" className='text-center text-danger text-capitalize bottom-0'>Integrated-Home Unified Stability Test System</h1>

        <p className='text-left text-danger my-5'>{definition}
           
        </p>

        <div style = {{backgroundColor: 'royalblue',background: 'linear-gradient()'}}>
        <div className="container" class='my-5'>
            <div className="row">
                <div className="col-sm">
                    <div class="card" >
                    <NavLink to="/karack">
                        <img src="/images/Verizon.png" class="card-img-top btn btn-outline-dark" alt="..." height="200px" />
                        </NavLink>
                        <div class="card-body" >
                            <h5 class="card-title">VERIZON</h5>
                            <p class="card-text">Verizon Wireless (commonly shortened to Verizon) is an American telecommunications company which offers wireless products and services. It is a division of Verizon Communications.</p>
                            <NavLink to="#" class="btn btn-primary">Stability Running</NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div class="card">
                        <img src="/images/Telecom.png" class="card-img-top" alt="..." height="200px" />
                        <div class="card-body">
                            <h5 class="card-title">TELECOM</h5>
                            <p class="card-text">Telecom is the exchange of information over significant distances by electronic means, referring to all types of voice, data and video transmission.It is a division of TELECOM Communications.</p>
                            <NavLink to="#" class="btn btn-primary">Stability Running</NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div class="card">
                        <img src="/images/Frontier.png"
                            class="card-img-top"
                            alt="..."
                            height="200px"

                        />
                        <div class="card-body">
                            <h5 class="card-title">FRONTIER</h5>
                            <p class="card-text">Frontier Communications Corporation is an American telecommunications company. The company previously served primarily rural areas and smaller communities, but now also serves several large metropolitan markets.</p>
                            <NavLink to="#" class="btn btn-primary">Stability Running</NavLink>
                        </div>
                    </div>
                </div>


                <div className="col-sm">
                    <div class="card">
                        <img src="/images/Bell.png"
                            class="card-img-top"
                            alt="..."
                            height="200px"

                        />
                        <div class="card-body">
                            <h5 class="card-title">BELL</h5>
                            <p class="card-text">Bell Media operates the country's top media brands and is a leading investor in Canadian content creation, including local television and radio news, sports and entertainment programming, and other original TV and film productions.</p>
                            <NavLink to="#" class="btn btn-primary">Stability Running</NavLink>
                        </div>
                    </div>
                </div>

            </div>
        </div>


        <div className="container" class='my-5'>
            <div className="row">
                <div className="col-sm">
                    <div class="card" >
                        <img src="/images/RDK.png" class="card-img-top" alt="..." height="200px" />
                        <div class="card-body">
                            <h5 class="card-title">RDK</h5>
                            <p class="card-text">Reference Design Kit, commonly known as RDK is a pre-integrated, open-source software distribution that accelerates the deployment of next-gen video and broadband services. It provides CPE such as set-top boxes.</p>
                            <NavLink to="#" class="btn btn-primary">Stability Running</NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div class="card">
                        <img src="/images/Multichoice.png" class="card-img-top" alt="..." height="200px" />
                        <div class="card-body">
                            <h5 class="card-title">MULTICHOICE</h5>
                            <p class="card-text">MultiChoice is a South African company that operates the DStv. MultiChoice was formed out of the subscriber-management and broadcasts the full range of M-Net channels on the DStv service.</p>
                            <NavLink to="#" class="btn btn-primary">Stability Running</NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div class="card">
                        <img src="/images/freesat.png"
                            class="card-img-top"
                            alt="..."
                            height="200px"

                        />
                        <div class="card-body">
                            <h5 class="card-title">FREESAT</h5>
                            <p class="card-text">Freesat is a British free-to-air satellite television service, provided by joint venture between the BBC and ITV plc.[1] The service was formed as a memorandum in 2007 and has been marketed since 6 May 2008.</p>
                            <NavLink to="/" class="btn btn-primary">Stability Running</NavLink>
                        </div>
                    </div>
                </div>


                <div className="col-sm">
                    <div class="card">
                        <img src="/images/charter.png"
                            class="card-img-top"
                            alt="..."
                            height="200px"

                        />
                        <div class="card-body">
                            <h5 class="card-title">CHARTER</h5>
                            <p class="card-text">Charter Communications, Inc., is an American telecommunications and mass media company with services branded as Charter Spectrum. With over 26 million customers in 41 states.</p>
                            <NavLink to="https://www.google.com/" class="btn btn-primary">Stability Running</NavLink>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
    </div>

    </>

    );
}


export default Secondpage;