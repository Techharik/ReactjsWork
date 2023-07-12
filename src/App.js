import react from "react";
import Header from "./components/Header";

import "./styles.css";
import Main from "./components/context/contextCom/Maincontext";

export default function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}
