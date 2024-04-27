import React from "react";

const Logo = ({ image, text }) => {
  return (
    <div>
      <img src={image} alt="Logo" />
      <p>{text}</p>
    </div>
  );
};

export default Logo;
