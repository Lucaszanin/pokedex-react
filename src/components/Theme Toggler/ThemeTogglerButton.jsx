import React, { useContext, useState } from "react";
import { ThemeContext, themes } from "../../Contexts/theme-context";
import Toggle from "./Toggle";

function ThemeTogglerButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  const handleToggleChange = () => {
    setToggle(!toggle);
    setTheme(!theme);
  };
  return (
    <div>
      <Toggle toggle={toggle} handleToggleChange={handleToggleChange} />
    </div>
  );
}

export default ThemeTogglerButton;
