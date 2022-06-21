import React from 'react';
import "../main.css";

import Board from "../components/Board";
import Helper from "../components/Helper";
import CustomControls from "../components/CustomControls";
import ModalProperty from './ModalProperty';

export default function InteractiveProperty() {
    return (
        <div className="stack interact-panel">
          <Board className="board mainBoard"></Board>
          <div className="iconDiv flex">
            <ModalProperty className="modalProperty" id="dictionary" icon={
              <i class="large material-icons">book</i>
            }/>
            <ModalProperty className="modalProperty" id="sound" icon={
              <i class="large material-icons">volume_up</i>
            }/>
          </div>
          <Helper className="assist helper">ㄷ</Helper>
          <CustomControls className="assist controlpanel" />
        </div>
    );
}