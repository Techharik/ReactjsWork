import react from "react";
import Header from "./components/Header";

import "./styles.css";
import ThemeProvider from './components/ThemeSwitcher/ThemeProvider'
import AppOne from "./components/ThemeSwitcher/ThemeProvider";

export default function App() {
  return (
    <div>
      <Header />
   <AppOne />
    </div>
  );
}
