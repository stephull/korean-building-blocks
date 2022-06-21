import React from "react";
import "../main.css";

export default function CustomButton(
    {id, className, children, onClick = null, style = null}
) {
    return (
        <button 
            id={id}
            className={className}
            onClick={onClick}
            style={style}
        >
            {children}
        </button>
    );
}