import React from "react";
import Image from "../images/download.jpg";
import Star from "../images/star.png";
 
function Card() {
    return(
        <div className="card">
            <img src={Image} className="card-img" />
            <div className="card-stats">
                <img src={Star} className="card-star" />
                <span>5.0</span>
                <span className="grey">(6) .</span>
                <span className="grey">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    );
}

export default Card;