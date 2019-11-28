import React from "react";
import "./cardHeader.css";

const CardHeader = props => {
    const { headerText, menuData } = props;


  return (
    <div className="header-card">
      <div className="header-text">{headerText}</div>
      <div className="header-dd">
        <a className="dd-button">
          <i className="fas fa-ellipsis-h dd-button"></i>
        </a>
        <div className='dd-content' >
          <ul className="list-dd">
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
