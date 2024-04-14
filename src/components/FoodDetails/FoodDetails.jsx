import React from "react";
import "./FoodDetails.css";
export default function FoodDetails(props) {
  return (
    <div className="food-details">
      <h1>{props.name}</h1>
      <p className="food-category">{props.category}</p>
      <div className="food-more-info">
        <div className="food-rate">
          <img
            src="https://food.grab.com/static/images/icons/icon-star.svg"
            alt="star icon"
          />
          <span>{props.rate}</span>
        </div>
        <div className="food-time-dist">
          <img
            src="https://food.grab.com/static/images/icons/icon-clock.svg"
            alt="clock icon"
          />
          <span className="promotion-time">
            {props.mins} <span>phút</span> &bull;{" "}
            <span className="food-dist">
              {props.dist} <span>km</span>
            </span>
          </span>
        </div>
      </div>
      <div className="food-open-door">
        <span className="open-door">Giờ mở cửa</span>
        <span className="food-date">
          Hôm nay <span className="food-time">{props.open}</span>
        </span>
      </div>
      <div className="food-tag">
        <img
          src="https://food.grab.com/static/images/icons/icon-promo-tag.svg"
          alt="promo tag icon"
        />
        <span>{props.promo}</span>
      </div>
    </div>
  );
}
