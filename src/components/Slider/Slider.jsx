import React from "react";
import { promo_foods, responsive } from "../../data/data.js";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import "./Slider.css";
export default function Slider() {
  return (
    <Carousel responsive={responsive}>
      {promo_foods.map((food, index) => (
        <div key={index} className="promotion-items">
          <Link
            to={`/restaurant-details/${food?.id}`}
            key={food.id}
            className="promotion-item"
          >
            <div className="promotion-content">
              <Link to={`/restaurant-details/${food?.id}`}>
                <img src={food.img} alt={food.name} />
                <span className="promotion-label">{food.tag}</span>
              </Link>
              <h3 className="promotion-title">{food.name}</h3>
              <p className="promotion-category">{food.category}</p>
              <div className="promotion-more-info">
                <div className="promotion-rate">
                  <img
                    src="https://food.grab.com/static/images/icons/icon-star.svg"
                    alt="star icon"
                  />
                  <span>{food.rate}</span>
                </div>
                <div className="promotion-time-dist">
                  <img
                    src="https://food.grab.com/static/images/icons/icon-clock.svg"
                    alt="clock icon"
                  />
                  <span className="promotion-time">
                    {food.mins} <span>phút</span> &bull;{" "}
                    <span className="promotion-dist">
                      {food.dist} <span>km</span>
                    </span>
                  </span>
                </div>
              </div>
              <div className="promotion-tag">
                <img
                  src="https://food.grab.com/static/images/icons/icon-promo-tag.svg"
                  alt="promo tag icon"
                />
                <span>{food.promo}</span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </Carousel>
  );
}
