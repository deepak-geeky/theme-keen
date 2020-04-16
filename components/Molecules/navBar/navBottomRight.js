import React from "react";
import HoverButton from "../../atoms/Buttons/hoverButton";
import './navBottomRight.css'
export const NavBottomRight = () => {
  const getDate = () => {
    const date = new Date();

    const monthNames = [
      "January",
      "Feb",
      "Mar",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec"
    ];

    return date.getDate() + " " + monthNames[date.getMonth()];
  };

  return (
    <div className='right-bottom-container'>
      <div className="right-item">
        <HoverButton label="Today" hovercolor="blue" />
      </div>
      <div className="right-item">
        <HoverButton label="Month" hovercolor="blue" />
      </div>
      <div className="right-item">
        <HoverButton label="Year" hovercolor="blue" />
      </div>
      <div className="right-item">
        <HoverButton label={`Today: ${getDate()}`} />
      </div>
      <div className="right-item"></div>
    </div>
  );
};
