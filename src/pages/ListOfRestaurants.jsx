import React from "react";
import "./App.css";
import NavBar from "../components/NavBar/NavBar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import FindingFood from "../components/FindingFoods/FindingFood.jsx";
import ListFoods from "../components/ListFoods/ListFoods.jsx";
import Title from "../components/Title/Title.jsx";
import { promo_foods } from "../data/data.js";
import { Routes, Route, Link } from "react-router-dom";
export default function ListOfRestaurants() {
  return (
    <>
      <NavBar />
      <div className="break-p"></div>
      <div className="promotion-section container">
        <div className="promotion-container m-40">
          <FindingFood />
          <ListFoods
            rootLink="Trang chủ"
            rootLink1="Ẩm thực"
            currentPage="Khuyến mãi"
          />
          <Title p_1="Ưu đãi ở " p_2="Location" />
          <div className="promotion-items">
            {promo_foods.map((food) => (
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
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <Routes>
        <Route path="/restaurant-details/:id" />
        <Route path="/home" />
      </Routes>
    </>
  );
}
