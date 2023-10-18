import React from "react";
import Navbar from "./Navbar";
import logo1 from '../src/assests/A.jpg';
import logo2 from '../src/assests/B.jpg';
import logo3 from '../src/assests/C.jpg';
const Home = () => {
    return (
        <>
            <Navbar />
            <div id="carouselExampleAutoplaying" className="carousel slide mb-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={logo1} classname="d-block w-100" alt="..." style={{ width: "100% ", height: "100vh" }} />
                    </div>
                    <div className="carousel-item">
                        <img src={logo2} className="d-block w-100" alt="..." style={{ width: "100% ", height: "100vh" }} />
                    </div>
                    <div className="carousel-item">
                        <img src={logo3} className="d-block w-100" alt="..." style={{ width: "100% ", height: "100vh" }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
export default Home;