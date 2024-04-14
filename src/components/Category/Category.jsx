import React from "react";
import "./Category.css";
import { foods } from "../../data/data.js";

export default function Category() {
  return (
    <div className="category-foods">
      {foods.map((food, index) => {
        return (
          <div key={index} className="category-item">
            <a href="#" className="category-content">
              <img src={food.img} alt={food.title} />
              <p>{food.title}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
}
