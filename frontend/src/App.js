import React from 'react';
import Panel from "./components/Panel";
import Board from "./components/Board";
import CustomButton from "./components/CustomButton";
import AppHeader from "./components/AppHeader";
import Helper from "./components/Helper";
import LetterHolder from "./components/LetterHolder";
import "./main.css";

// images
import brick from "./images/default-brick.png";

// all letter codes for images
const fc_codes = ['g', 'n', 'd', 'l', 'm', 'b', 's', 'x', 'j', 'ch', 'k', 't', 'p', 'h'];
const fxc_codes = ['g', 'd', 'b', 's', 'j'];
const v_codes = ['ah', 'ae', 'yah', 'yae', 'uh', 'eh', 'yuh', 'yeh', 'o', 'yo', 'u', 'yu', 'eu', 'ee'];
const vx_codes = ['ah', 'ae', 'ee', 'uh', 'eh'];
const lc_codes = [].concat(fc_codes);
const lxc_codes = ['g', 's', 'j', 'h', 'm', 'b', 't', 'p']
lc_codes[lc_codes.indexOf('x')] = 'ng';
Object.freeze(fc_codes, fxc_codes, v_codes, vx_codes, lc_codes, lxc_codes);

// testing for custom button
var testApp = true;

export default function App() {
  return (
    <div className="mainApp">
      <AppHeader className="appHeader flex">
        <CustomButton className="customButton headerButton">HOME</CustomButton>
        <CustomButton className="customButton headerButton">ABOUT</CustomButton>
        <CustomButton className="customButton headerButton">RESOURCES</CustomButton>
        <CustomButton className="customButton headerButton">FEEDBACK</CustomButton>
        <CustomButton className="customButton headerButton">SHARE</CustomButton>
      </AppHeader>
      <div className="flex">
        <Panel id="mainPanel" className="panel">
          <span id="panel-instruct">Click and drag</span>
          <span id="panel-instruct">to add a letter</span>
          <LetterHolder id="default-brick" className="imageHolder"
            src={brick} alt="White brick for testing"/>
          <CustomButton className="customButton panelButton">
            {(testApp ? "NEXT": "FINISH")}
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
