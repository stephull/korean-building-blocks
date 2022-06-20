import React from "react";
import "../main.css";

export default function LetterHolder(props) {
    // id: ㄱ, src: fc-g (for example)
    return (
        <img id={props.id} className={props.className}
            src={props.src} alt={props.id}/>
    );
}