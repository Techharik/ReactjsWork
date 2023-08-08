import react from "react";
import Header from "./components/Header";

import "./styles.css";
import ThemeProvider from './components/ThemeSwitcher/ThemeProvider'
import AppOne from "./components/ThemeSwitcher/ThemeProvider";
import Mainred from "./components/TodoReducer/Mainred";
import Todomain from "./components/localStorage/Todomain";
import RouterMain from "./components/Router/RouterMain";
import Mapp from "./components/firebase/Mapp";

export default function App() {
  return (
    <div>
      {/* <Header />
   {/* <AppOne />
    */}
  
    {/* <Mainred /> */}
    {/* <Todomain /> */} 
    {/* <RouterMain />
     */}

     <Mapp />
    </div>
  );
}
