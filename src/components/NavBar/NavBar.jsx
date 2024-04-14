import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

export default function NavBar() {
  const logoGreen = "https://food.grab.com/static/images/logo-grabfood2.svg";
  const iCart =
    "https://food.grab.com/static/images/icons/icon-cart-default-black.svg";
  return (
    <div className="navbar transparent1">
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <Link to="/home">
              <img src={logoGreen} alt="Logo" />
            </Link>
          </div>
          <div className="navbar-findAddress">
            <div className="navbar-delivery">
              <span>Giao đến</span>
              <i
                className="fa-solid fa-location-dot fa-lg"
                style={{ color: "#f51a0a" }}
              ></i>
            </div>
            <input
              type="text"
              placeholder="Nhập địa chỉ của bạn"
              maxLength="512"
            />
          </div>
          <div className="navbar-menu">
            <div className="navbar-cart">
              <img src={iCart} alt="Cart" />
            </div>
            <div className="navbar-login">
              <Link to="/login">Đăng nhập/Đăng ký</Link>
            </div>
            <div className="navbar-change-lang">
              VI{" "}
              <span>
                <i className="fa-solid fa-angle-down"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
