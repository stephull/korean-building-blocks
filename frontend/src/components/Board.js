import React from "react";
import "../main.css";

export default function Board(props) {
    return (
        <div
            id={props.id}
            className={props.className}
        >
            <div className="board-text"
                style={{
                    textAlign: 'center',
                    fontSize: (props.className === "board sideBoard") ?
                        '48px' : (props.className === "board mainBoard") ?
                            '200px' : '16px'
                }}
            >
                {props.children}
            </div>
        </div>
    );
}