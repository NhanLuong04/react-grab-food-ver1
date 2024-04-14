import React from "react";
import { Link } from "react-router-dom";
import "./ListFoods.css";
export default function ListFoods(props) {
  return (
    <div className="list-foods">
      <div className="list-food-link">
        <Link to="/home">{props.rootLink}</Link>
        <i className="fa-solid fa-chevron-right"></i>
        <Link to="/">{props.rootLink1}</Link>
        <i className="fa-solid fa-chevron-right"></i>
        <div className="list-foods-current">{props.currentPage}</div>
      </div>
    </div>
  );
}
