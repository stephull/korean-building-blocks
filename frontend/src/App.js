import React from 'react';
import LetterBlock from './components/LetterBlock';
import Panel from "./components/Panel";
import Board from "./components/Board";
import CustomButton from "./components/CustomButton";
import AppHeader from "./components/AppHeader";
import Helper from "./components/Helper";
import "./main.css";

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
          <span id="panel-instruct">Click and drag to add letter</span>
          <LetterBlock className="letterBlock" id="fc-g">
            ㄱ
          </LetterBlock>
          <LetterBlock className="letterBlock" id="fc-n">
            ㄴ
          </LetterBlock>
          <LetterBlock className="letterBlock" id="fc-d">
            ㄷ
          </LetterBlock>
          <LetterBlock className="letterBlock" id="fc-l">
            ㄹ
          </LetterBlock>
          <LetterBlock className="letterBlock" id="fc-m">
            ㅁ
          </LetterBlock>
          <LetterBlock className="letterBlock" id="fc-b">
            ㅂ
          </LetterBlock>
          <CustomButton className="customButton panelButton">
            {(testApp ? "NEXT": "FINISH")}
          </CustomButton>
        </Panel>
        <div className="flex-stack interact-panel">
          <Board id="mainBoard" className="board" />
          <Helper id="" className="helper">
            THIS IS A TEST! COME BACK LATER.
          </Helper>
        </div>
      </div>
    </div>
  );
}
