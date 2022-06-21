import React from 'react';
import "../main.css";

import LetterPanel from "../components/LetterPanel";

export default function PanelProperty() {
    return (
        <div className="panelProperty">
            <span id="panel-instruct">Click and drag to add a letter in the box</span>
            <LetterPanel />
        </div>
    );
}