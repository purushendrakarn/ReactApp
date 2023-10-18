import React, { useState } from "react";
import logo from '../src/assests/lohgo.jpg';
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-info b">
                <div className="container-fluid">
                    <a className="navbar-brand" ><img src={logo} width={150} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item px-4 ">
                                <a className="nav-link text-dark h4" href="/">Home</a>
                            </li>
                            <li className="nav-item px-4 ">
                                <a className="nav-link text-dark h4" href="/Contact">Contact</a>
                            </li>
                            <li className="nav-item px-4">
                                <a className="nav-link text-dark h4" href="/About">About</a>
                            </li>
                        </ul>
                        <form className="d-flex p-2" >
                            <button onClick={() =>navigate("/Signup")} className="btn btn-outline-success text-dark">Sign up</button>
                        </form>
                        <form className="d-flex" >
                            <button onClick={() =>navigate("/Loogin ")} className="btn btn-outline-success text-dark">Login</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )

}
export default Navbar 