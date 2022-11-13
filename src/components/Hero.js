import React from "react";
import grid from "../images/photo-grid.jpg"

function Hero() {
    return(
        <section className="hero">
            <img src={grid} alt="" className="hero-img" />
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-content">Join unique interactive activites led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    );
}

export default Hero;