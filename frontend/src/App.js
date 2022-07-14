import React, { useState } from 'react';
import AppHeader from "./components/AppHeader";
import PropertyMain from "./components/PropertyMain";
import PropertyAssist from "./components/PropertyAssist";
import Announcement from "./components/Announcement";
import MainTitle from "./components/MainTitle";
import "./main.css";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default function App() {
  // ::: ALL STATES HERE ARE RELATED TO CUSTOM CONTROL BOARD :::
  // prevInstance is for undo-ing once; if redo, set forwardInstance
  // forwardInstance is if redo was made, clear if moved on
  // currLetter is the immediate vowel or consonant
  // continuous is the full Korean character being built
  const [prevInstance, setPrevInstance] = useState('');
  const [forwardInstance, setForwardInstance] = useState('');
  const [currLetter, setCurrLetter] = useState('');
  const [continuous, setContinuous] = useState('');

  return (
    <div className="mainApp">
      <AppHeader />
      <Announcement />
      <MainTitle />
      <div className="flex">
        <DndProvider backend={HTML5Backend}>
          <PropertyMain />
          <PropertyAssist />
        </DndProvider>
      </div>
    </div>
  );
}
