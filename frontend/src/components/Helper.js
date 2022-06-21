import React from 'react';
import "../main.css";
import Board from "./Board";

export default function Helper(props) {
    return (
      <div
        className={props.className}
      >
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
    </div>
  );
}