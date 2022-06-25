import React from "react";
import "../main.css";

export default function LetterHolder(props) {
    const {id, className, src} = props;
    return (
        <img id={id} className={className}
            src={src} alt={id} />
    );
}