import { createContext, useState } from "react";

export const themes = {
  ligth: {
    color: "#353d64",
    background: "#555973",
    fill: "#555973",
  },
  dark: {
    color: "#FFF",
    background: "#2b3151",
    fill: "#2b3151",
  },
};

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes.dark);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
