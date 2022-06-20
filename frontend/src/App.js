import React from 'react';
import LetterBlock from './components/LetterBlock';
import Panel from "./components/Panel";
import Board from "./components/Board";
import CustomButton from "./components/CustomButton";
import "./main.css";

// testing for custom button
var testApp = true;

export default function App() {
  return (
    <div className="mainApp">
      <Panel id="mainPanel" className="panel">
        <span id="panel-instruct">Click and drag to add letter</span>
        <LetterBlock className="letterBlock" id="letter-1">
          A
        </LetterBlock>
        <LetterBlock className="letterBlock" id="letter-2">
          B
        </LetterBlock>
        <LetterBlock className="letterBlock" id="letter-3">
          C
        </LetterBlock>
        <LetterBlock className="letterBlock" id="letter-1">
          D
        </LetterBlock>
        <LetterBlock className="letterBlock" id="letter-2">
          E
        </LetterBlock>
        <LetterBlock className="letterBlock" id="letter-3">
          F
        </LetterBlock>
        <CustomButton
          className="customButton"
          id="panelContinueButton"
        >
          {(testApp ? "NEXT": "FINISH")}
        </CustomButton>
      </Panel>
      <Board id="mainBoard" className="board" />
    </div>
  );
}
