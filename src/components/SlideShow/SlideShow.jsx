import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SlideShow.css";

export default function SlideShow(props) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      key={props.id}
      className={`slide-show ${isActive ? "active" : ""}`}
      onClick={handleClick}
    >
      <Link to="/" className="slide-show-item">
        {props.category}
      </Link>
    </div>
  );
}
