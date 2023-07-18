import react from "react";
import Header from "./components/Header";

import "./styles.css";
import ThemeProvider from './components/ThemeSwitcher/ThemeProvider'
import AppOne from "./components/ThemeSwitcher/ThemeProvider";
import Mainred from "./components/TodoReducer/Mainred";
import Todomain from "./components/localStorage/Todomain";

export default function App() {
  return (
    <div>
      <Header />
   {/* <AppOne />
    */}
    <h1>Hello</h1>
    {/* <Mainred /> */}
    <Todomain />
    </div>
  );
}
