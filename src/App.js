import react from "react";
import Header from "./components/Header";

import "./styles.css";
import ThemeProvider from './components/ThemeSwitcher/ThemeProvider'
import AppOne from "./components/ThemeSwitcher/ThemeProvider";
import Mainred from "./components/TodoReducer/Mainred";

export default function App() {
  return (
    <div>
      <Header />
   {/* <AppOne />
    */}
    <Mainred />
    </div>
  );
}
