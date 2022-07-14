import React, { useState } from 'react';
import "../main.css";
import ButtonCustom from "./ButtonCustom";

export default function CustomControls(props) {
  const [doing, setDoing] = useState(true);
  const toggleDo = (() => setDoing((value) => !value));

  const [reset, setReset] = useState(false);
  const toggleReset = (() => setReset((value) => !value));

  return (
    <div
      id={props.id}
      className={props.className}
    >
      <div className="flex">
        <div>
          <b style={{ padding: '1px' }}>Controls</b>
        </div>
        <div className="flex">
          <ButtonCustom
            className="customButton ctrlButton"
            onClick={toggleDo}
          >
            {(doing ? "Undo" : "Redo")}
          </ButtonCustom>
          <ButtonCustom
            className="customButton ctrlButton"
            onClick={toggleReset}
          >
            Reset
          </ButtonCustom>
        </div>
      </div>
    </div>
  );
}