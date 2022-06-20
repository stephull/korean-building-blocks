import React from "react";
import "../main.css";

export default function AppHeader(props) {
    return (
        <div
            className={props.className}
        >
            {props.children}
        </div>
    );
}