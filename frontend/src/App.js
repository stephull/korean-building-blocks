import React from 'react';
import AppHeader from "./components/AppHeader";
import PropertyPanel from "./components/PropertyPanel";
import PropertyInteractive from './components/PropertyInteractive';
import "./main.css";

// for drag-and-drop
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// app logo
import appLogo from "./images/extra/app_logo.png";

// app 
export default function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="mainApp">
        <AppHeader className="appHeader flex" />
        <div className="title flex">
          <img id="app-logo" src={appLogo} alt="ㄱㄴㄷㄹ" />
          <div>
            <span>Korean Building Blocks</span><br />
            <small>Learn Korean by assembling different characters to create words/sounds.</small>
          </div>
        </div>
        <div className="flex">
          <PropertyPanel />
          <PropertyInteractive />
        </div>
      </div>
    </DndProvider>
  );
}
