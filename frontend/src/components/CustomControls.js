import React from 'react';
import "../main.css";
import CustomButton from "./CustomButton";

export default function CustomControls(props) {
    return (
      <div
            id={props.id}
            className={props.className}
        >
            <div className="flex">
              <div>
                <b style={{padding: '1px'}}>Controls</b>
              </div>
              <div className="flex">
                <CustomButton 
                  className="customButton ctrlButton"
                >
                  Undo
                </CustomButton>
                <CustomButton 
                  className="customButton ctrlButton"
                >
                  Redo
                </CustomButton>
                <CustomButton 
                  className="customButton ctrlButton"
                >
                  Reset
                </CustomButton>
              </div>
            </div>
        </div>
    );
}