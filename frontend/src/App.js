import React from 'react';
import Panel from "./components/Panel";
import Board from "./components/Board";
import AppHeader from "./components/AppHeader";
import Helper from "./components/Helper";
import LetterPanel from "./components/LetterPanel";
import CustomControls from "./components/CustomControls";
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
          <span>Korean Building Block Website</span><br />
          <small>Learn Korean by assembling different characters to create words and sounds.</small>
        </div>
      </div>
      <div className="flex">
        <Panel id="mainPanel" className="panel">
          <span id="panel-instruct">Click and drag to add a letter in the box</span>
          <LetterPanel />
        </Panel>
        <div className="stack interact-panel">
          <Board className="board mainBoard">
          </Board>
          <Helper className="assist helper" />
          <CustomControls className="assist controlpanel" />
        </div>
      </div>
    </div>
  );
}
