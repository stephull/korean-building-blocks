import React from 'react';
import appLogo from "../images/extra/app_logo.png";

export default function Title() {
    return (
        <div className="title flex">
            <img id="app-logo" src={appLogo} alt="ㄱㄴㄷㄹ - Website Logo" />
            <div>
                <span>Korean Building Blocks</span><br />
                <small>Learn Korean by assembling different characters to create words/sounds.</small>
            </div>
        </div>
    );
}