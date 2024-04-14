import React from "react";
import "./Title.css";
import PropTypes from "prop-types";
export default function Title(props) {
  return (
    <h1>
      {props.p_1} <span>{props.p_2}</span>
    </h1>
  );
  Title.PropTypes = {
    span: "",
  };
}
