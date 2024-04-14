import React from "react";
import "./CategoryDetails.css";
import { promo_foods } from "../../data/data";

export default function CategoryDetails(props) {
  const selectedFood = promo_foods.find((food) => food.id === props.idPrev);

  return (
    <div className="category-details">
      <div className="category-details-container">
        <div className="category-details-content">
          {selectedFood.items.map((item, index) => (
            <div key={index}>
              <h1>{item.category}</h1>
              <div className="category-items">
                {item.foods.map((food, foodIndex) => (
                  <div className="category-item" key={foodIndex}>
                    <div className="category-item-top">
                      <img
                        className="category-item-img"
                        src={food.img}
                        alt="chicken"
                      />
                      <div className="category-item-info">
                        <div className="item-info-name">{food.name}</div>
                        <div className="item-info-sidefood">
                          {food.side_dish}
                        </div>
                      </div>
                    </div>
                    <div className="category-item-bot">
                      <div className="item-price-plus">
                        <div className="item-info-price">{food.price}</div>
                        <img
                          src="https://food.grab.com/static/images/quick-add/plus-white.svg"
                          alt="plus"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
