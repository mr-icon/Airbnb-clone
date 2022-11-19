import React from "react";
import Star from "../images/star.png";
 
function Card(props) {
    return(
        <div className="card">
            <img src={props.img} className="card-img" />
            <div className="card-stats">
                <img src={Star} className="card-star" />
                <span>{props.rate}</span>
                <span className="grey">({props.score}) .</span>
                <span className="grey">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    );
}

export default Card;