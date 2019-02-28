import React from "react";
import Selector from "./Components/Selector";
import "./App.css";
import { mainAppStyle, headerStyle } from "./Style";
import { groupIcon } from "./Images";

const Header = () => {
  return (
    <div style={{ ...headerStyle.containerStyle }}>
      <img src={groupIcon} />
      <span style={{ ...headerStyle.textStyle }}>Choose number of people</span>
    </div>
  );
};

const MainApp = () => {
  return (
    <div className="App">
      <div style={{ ...mainAppStyle }}>
        <Header />
        <Selector />
      </div>
    </div>
  );
};

export default MainApp;
