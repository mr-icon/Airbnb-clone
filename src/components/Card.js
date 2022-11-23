import React from "react";
import Star from "../images/star.png";

function Card(props) {
  let badgeText;
  if (props.item.openSports === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "online") {
    badgeText = "Online";
  }
  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={props.item.coverImg} className="card-img" />
      <div className="card-stats">
        <img src={Star} className="card-star" />
        <span>{props.item.stats.rating}</span>
        <span className="grey">({props.item.stats.reviewCount}) .</span>
        <span className="grey">{props.item.location}</span>
      </div>
      <p>{props.item.title}</p>
      <p>
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
