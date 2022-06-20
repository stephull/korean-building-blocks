import React from 'react';
import Panel from "./components/Panel";
import Board from "./components/Board";
import CustomButton from "./components/CustomButton";
import AppHeader from "./components/AppHeader";
import Helper from "./components/Helper";
import LetterPanel from "./components/LetterPanel";
import "./main.css";

// for header
function getHeaderItems() {
  let items = ['HOME', 'ABOUT', 'RESOURCES', 'FEEDBACK', "SHARE"];
  let ret = [];
  items.forEach((item) => {
    ret.push(<CustomButton className="customButton headerButton">
      {item}
    </CustomButton>)
  })
  return ret;
}

export default function App() {
  return (
    <div className="mainApp">
      <AppHeader className="appHeader flex">
        {getHeaderItems()}
      </AppHeader>
      <div className="flex">
        <Panel id="mainPanel" className="panel">
          <span id="panel-instruct">Click and drag</span>
          <span id="panel-instruct">to add a letter</span><br/>
          <LetterPanel />
          <CustomButton className="customButton panelButton">
            NEXT
          </CustomButton>
        </Panel>
        <div className="stack interact-panel">
          <Board id="mainBoard" className="board" />
          <Helper id="" className="helper">
            THIS IS A TEST! COME BACK LATER.
          </Helper>
        </div>
      </div>
    </div>
  );
}
