import React from 'react';
import "../main.css";

export default function PageModal({className, title, children}) {
    return (
        <div className={className}>
            <b>{title}</b>
            <div className="modalArea">{children}</div>
        </div>
    );
}