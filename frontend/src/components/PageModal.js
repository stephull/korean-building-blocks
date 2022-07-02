import React from 'react';
import "../main.css";

export default function PageModal(
    {className, title, children=null, styles=null}
) {
    return (
        <div className={className} style={styles}>
            <b>{title}</b>
            {
                (children !== null) ? 
                <div className="modalArea">{children}</div> : 
                null
            }
        </div>
    );
}