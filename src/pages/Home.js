import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizzaa.jpg";
import "../styles/Home.css"; 

function Home() {
  return (
    <div className="home"  style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
            <h1> BUONA PIZZA</h1>
            <p>PIZZA PER TUTTI I GUSTI</p>
            <Link to="/menu">
            <button> ORDER NOW </button>
            </Link>
        </div>
    </div>
  )
}

export default Home
