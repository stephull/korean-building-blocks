import React from "react";
import "../main.css";

export default function IconButton({className, id, onClick, children}) {
    return (
        <button 
            className={className}
            id={id}
            onClick={onClick}
        >
            {children}
        </button>
    );
}