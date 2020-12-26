import React from "react";
import "./Header.css";

function Header({ title }) {
  if (window.screen.width >= 1280) {
    return (
      <div className="header">
        <h4>{title}</h4>
      </div>
    );
  } else {
    return (
      <div className="header_mobile">
        <h4>{title}</h4>
      </div>
    );
  }
}

export default Header;
