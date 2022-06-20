import React from "react";
import "../main.css";

export default function LetterHolder(props) {
    return (
        <img id={props.id} className={props.className}
            src={props.src} alt={props.alt} />
    );
}