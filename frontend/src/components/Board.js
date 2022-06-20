import React from "react";
import "../main.css";

export default function Board(props) {
    return (
        <div
            id={props.id}
            className={props.className}
        >
            {props.children}
        </div>
    );
}