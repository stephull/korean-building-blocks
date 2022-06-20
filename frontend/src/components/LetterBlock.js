import React from 'react';
import "../main.css";

export default function LetterBlock(props) {
    return (
        <div 
            id={props.id}
            className={props.className}
        >
            {props.children}
        </div>
    );
}