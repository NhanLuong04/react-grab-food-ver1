import React from "react";
import "./Button.css";

export default function Button({ onClick, children }) {
  return (
    <button className="promotion-btn" onClick={onClick}>
      {children}
    </button>
  );
}
