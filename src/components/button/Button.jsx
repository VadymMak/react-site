import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSyze = SIZES.includes(buttonSize) ? buttonSize : STYLES[0];
  return (
    <Link to="signup" className="button-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSyze}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
