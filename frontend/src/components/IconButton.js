import React from "react";
import "../main.css";

export default function IconButton({className, onClick, children}) {
    return (
        <button 
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    );
}