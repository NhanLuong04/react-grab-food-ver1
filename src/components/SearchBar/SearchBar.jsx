import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="searchBar-container">
      <div className="searchBar-content">
        <div className="searchBar-iconMap">
          <i
            className="fa-solid fa-location-dot fa-lg"
            style={{ color: "#f51a0a" }}
          ></i>
        </div>
        <div className="searchBar-inpAddress">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Nhập địa chỉ của bạn"
              maxLength="512"
            />
          </div>
        </div>
        <div className="searchBar-location">
          <i
            className="fa-solid fa-location-crosshairs fa-lg"
            style={{ color: "#63E6BE" }}
          ></i>
        </div>
      </div>
    </div>
  );
}
