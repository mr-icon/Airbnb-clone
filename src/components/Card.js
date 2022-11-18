import React from "react";
import Image from "../images/image 12.png";
import Star from "../images/star.png";
 
function Card(props) {
    return(
        <div className="card">
            <img src={Image} className="card-img" />
            <div className="card-stats">
                <img src={Star} className="card-star" />
                <span>{props.rate}</span>
                <span className="grey">{props.score}</span>
                <span className="grey">{props.country}</span>
            </div>
            <p>{props.name}</p>
            <p><span className="bold">{props.price}</span> / person</p>
        </div>
    );
}

export default Card;