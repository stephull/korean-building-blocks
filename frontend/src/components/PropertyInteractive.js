import React from 'react';
import "../main.css";

import Board from "./Board";
import Helper from "./Helper";
import CustomControls from "./CustomControls";
import PropertyModal from './PropertyModal';

export default function PropertyInteractive() {
    return (
        <div className="stack interact-panel">
          <Board className="board mainBoard"></Board>
          <div className="iconDiv flex">
            <PropertyModal className="modalProperty" id="dictionary" icon={
              <i className="large material-icons">book</i>
            }/>
            <PropertyModal className="modalProperty" id="sound" icon={
              <i className="large material-icons">volume_up</i>
            }/>
          </div>
          <Helper className="assist helper">ㄷ</Helper>
          <CustomControls className="assist controlpanel" />
        </div>
    );
}