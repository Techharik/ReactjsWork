import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
import Header from './ThemeComp/Header'

const AppOne = () => {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
       <Header />
      </div>
    </ThemeContext.Provider>
  );
};

export default AppOne;
