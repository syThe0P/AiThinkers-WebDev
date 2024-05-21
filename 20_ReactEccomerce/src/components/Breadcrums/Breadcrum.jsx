import React from "react";
import "./Breadcrum.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrum = ({ category, name }) => {
  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="arrow" /> SHOP{" "}
      <img src={arrow_icon} alt="arrow" />
      {category} <img src={arrow_icon} alt="arrow" />
      {name}
    </div>
  );
};

export default Breadcrum;
