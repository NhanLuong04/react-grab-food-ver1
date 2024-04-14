import React from "react";
import "./SearchContainer.css";
import SearchBar from "../SearchBar/SearchBar";
export default function SearchContainer() {
  return (
    <div className="search-container">
      <div className="search-content ">
        <div className="search-heading">
          <div className="search-greeting">Good Evening</div>
          <div className="search-deliver">
            Where should we deliver your food today?
          </div>
        </div>
        <SearchBar />
        <button className="search-submit">Tìm kiếm</button>
      </div>
      <div className="search-bgImg-border"></div>
    </div>
  );
}
