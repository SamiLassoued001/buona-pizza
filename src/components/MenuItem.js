

import React from "react";
import { useNavigate } from "react-router-dom";

function MenuItem({ image, name, price }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signin");
  };

  return (
    <div className="menuItem" onClick={handleClick} style={{ cursor: "pointer" }}>
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h2>{name}</h2>
      <p>${price}</p>
    </div>
  );
}

export default MenuItem;
