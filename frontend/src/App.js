import React from 'react';
import PanelProperty from "./custom-properties/PanelProperty";
import AppHeader from "./components/AppHeader";
import InteractiveProperty from './custom-properties/InteractiveProperty';
import ModalProperty from './custom-properties/ModalProperty';
import "./main.css";

// app logo
import appLogo from "./images/extra/app_logo.png";

// app 
export default function App() {
  return (
    <div className="mainApp">
      <AppHeader className="appHeader flex" />
      <div className="title flex">
        <img id="app-logo" src={appLogo} alt="ㄱㄴㄷㄹ" />
        <div>
          <span>Korean Building Blocks</span><br />
          <small>Learn Korean by assembling different characters to create words/sounds.</small>
        </div>
      </div>
      <div className="flex">
        <PanelProperty />
        <InteractiveProperty />
      </div>
    </div>
  );
}
