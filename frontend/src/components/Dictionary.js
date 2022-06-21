import React from 'react';
import "../main.css";

import DictionaryEntry from "./DictionaryEntry";

export default function Dictionary(props) {
    return (
        <div className={props.className}>
            <DictionaryEntry className="dictionaryEntry" />
        </div>
    );
}