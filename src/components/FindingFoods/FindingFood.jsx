import React from "react";
import "./FindingFood.css";
import { Link } from "react-router-dom";
export default function FindingFood() {
  return (
    <div className="finding-foods-container">
      <div className="finding-search-foods">
        <span>
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <input type="text" placeholder="Tìm món hoặc quán ăn" maxLength="512" />
      </div>
      <div className="recommend-cate">
        <Link to="/">
          <div className="bg"></div>
          <img
            src="https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg"
            alt="img"
          />

          <div className="recommend-cate-name">Gần tôi</div>
        </Link>
        <Link to="/">
          <div className="bg"></div>
          <img
            src="https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg"
            alt="img"
          />

          <div className="recommend-cate-name">Tuần lễ món cơm</div>
        </Link>
        <Link to="/">
          <div className="bg"></div>
          <img
            src="https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg"
            alt="img"
          />

          <div className="recommend-cate-name">Quán ngon đặc tuyển</div>
        </Link>
        <Link to="/">
          <div className="bg"></div>
          <img
            src="https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg"
            alt="img"
          />

          <div className="recommend-cate-name">Ăn sáng uống cà phê</div>
        </Link>
        <Link to="/">
          <div className="bg"></div>
          <img
            src="https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg"
            alt="img"
          />

          <div className="recommend-cate-name">5 ưu đãi cùng một đơn</div>
        </Link>
      </div>
    </div>
  );
}
