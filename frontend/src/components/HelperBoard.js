import React from "react";
import "../main.css";

export default function HelperBoard(props) {
    const localStyles = {
        textAlign: 'center',
        fontSize: (props.className === "board sideBoard") ?
            '48px' : (props.className === "board mainBoard") ?
                '200px' : '16px'
    };

    return (
        <div
            id={props.id}
            className={props.className}
        >
            <div className="board-text"
                style={localStyles}
            >
                {props.children}
            </div>
        </div>
    );
}