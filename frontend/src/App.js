import React from 'react';
import Panel from "./components/Panel";
import Board from "./components/Board";
import CustomButton from "./components/CustomButton";
import AppHeader from "./components/AppHeader";
import Helper from "./components/Helper";
import LetterPanel from "./components/LetterPanel";
import "./main.css";

// app logo
import appLogo from "./images/extra/app_logo.png";

// for header
function getHeaderItems() {
  let items = ['HOME', 'ABOUT', 'RESOURCES', 'FEEDBACK', "SHARE"];
  let ret = [];
  items.forEach((item) => {
    ret.push(<CustomButton className="customButton headerButton">
      <b>{item}</b>
    </CustomButton>)
  })
  return ret;
}

// app (main page)
export default function App() {
  return (
    <div className="mainApp">
      <AppHeader className="appHeader flex">
        {getHeaderItems()}
      </AppHeader>
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
          <CustomButton className="customButton panelButton">
            NEXT
          </CustomButton>
        </Panel>
        <div className="stack interact-panel">
          <Board className="board mainBoard">
          </Board>
          <Helper className="helper help-controls">
            <div className="flex">
              <div>
                <b style={{padding: '10px'}}>Controls</b>
              </div>
              <div className="flex">
                <CustomButton className="customButton ctrlButton">Undo</CustomButton>
                <CustomButton className="customButton ctrlButton">Redo</CustomButton>
                <CustomButton className="customButton ctrlButton">Reset</CustomButton>
              </div>
            </div>
          </Helper>
          <Helper className="helper help-assistant">
            <div className="flex">
              <div>
                <Board className="board sideBoard">ㅂ</Board>
              </div>
              <div className="stack assistant-text">
                <b className="assistant-main">ㅂ</b>
                <div>
                  <i>(example)</i><br/>
                  <span>b- (비읍)</span>
                </div>
              </div>
            </div>
          </Helper>
        </div>
      </div>
    </div>
  );
}
