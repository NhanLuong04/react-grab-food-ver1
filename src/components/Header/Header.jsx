import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  const logoWhite =
    "https://food.grab.com/static/images/logo-grabfood-white2.svg";
  const logoGreen = "https://food.grab.com/static/images/logo-grabfood2.svg";
  const iCart =
    "https://food.grab.com/static/images/icons/icon-cart-default-black.svg";
  const [logo, setLogo] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.querySelector(".navbar");
      if (window.scrollY > 0) {
        navBar.classList.add("sticky");
        navBar.classList.remove("transparent");
        setLogo(true);
      } else {
        navBar.classList.remove("sticky");
        navBar.classList.add("transparent");
        setLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <Link to="/home">
              <img src={logo ? logoGreen : logoWhite} alt="Logo" />
            </Link>
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
