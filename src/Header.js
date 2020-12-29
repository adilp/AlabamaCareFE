import React from "react";
import "./Header.css";

function Header({ title }) {
  if (window.screen.width >= 1280) {
    return (
      <div className="header">
        <div className="text">
          <h4>{title}</h4>
        </div>
      </div>
    );
  } else {
    return (
      <div className="header_mobile">
        <div className="text">
          <h4>{title}</h4>
        </div>
      </div>
    );
  }
}

export default Header;
