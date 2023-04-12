import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="status">Status
      <i className="fa-solid fa-circle-check" style={{color: 'var(--accent)'}}></i>
        </div>
      <div className="out">
      <i className="fa-solid fa-right-from-bracket"></i>
      </div>
    </div>
  );
};

export default Header;
