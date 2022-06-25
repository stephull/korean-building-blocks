import React from 'react';
import "../main.css";

export default function PageModal(
    {className, title, children, styles=null}
) {
    return (
        <div className={className} style={styles}>
            <b>{title}</b>
            <div className="modalArea">{children}</div>
        </div>
    );
}