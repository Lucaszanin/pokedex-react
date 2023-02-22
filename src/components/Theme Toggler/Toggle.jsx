import React from "react";
import "./toggle.css";
import { TogglerContainer } from "./styles";

const Toggle = ({ toggle, handleToggleChange }) => {
  return (
    <TogglerContainer onClick={handleToggleChange}>
      <div className={`toggle-btn ${!toggle ? "disable" : ""}`}>
        {toggle ? "Light" : "Dark"}
      </div>
    </TogglerContainer>
  );
};

export default Toggle;
