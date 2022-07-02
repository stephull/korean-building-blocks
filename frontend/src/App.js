import React, { useState } from 'react';
import AppHeader from "./components/AppHeader";
import PropertyMain from "./components/PropertyMain";
import PropertyAssist from "./components/PropertyAssist";
import "./main.css";
import appLogo from "./images/extra/app_logo.png";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import axios from 'axios';

export default function App() {
  // for backend, show announcements if necessary
  const [update, setUpdate] = useState(null);
  const [showUpdate, setShow] = useState(true);
  function getUpdate() {
    axios({
      method: 'GET',
      url: "/announcement",
    })
      .then((res) => {
        const r = res.data;
        setUpdate({
          author: r.author,
          head: r.head,
          msg: r.msg,
          urgent: r.urgent,
          show: r.show
        })
      })
      .catch((err) => console.log(
        (err.response) ?
          err.response + '\n' + err.response.status + '\n' + err.response.headers :
          err
      ))
  }

  const announcement = (
      (update || getUpdate()) && showUpdate &&
      <div className="announcement" style={{ display: (update.show) ? 'block' : 'none' }}>
        <b style={{ fontSize: 'smaller', color: 'gray' }}>Announcements</b>
        <div id="update-contents">
          <b style={{
            fontSize: 'larger', backgroundColor: (update.urgent) ? "yellow" : "white"
          }}>{update.head}</b>
          <br />
          <small>{"From: " + update.author}</small>
          <br />
          <p>{update.msg}</p>
        </div>
        <button onClick={() => setShow(state => !state)}>Close</button>
      </div>
  );

  return (
    <div className="mainApp">
      <AppHeader className="appHeader flex" />
      {announcement}
      <div className="title flex">
        <img id="app-logo" src={appLogo} alt="ㄱㄴㄷㄹ - Website Logo" />
        <div>
          <span>Korean Building Blocks</span><br />
          <small>Learn Korean by assembling different characters to create words/sounds.</small>
        </div>
      </div>
      <div className="flex">
        <DndProvider backend={HTML5Backend}>
          <PropertyMain />
          <PropertyAssist />
        </DndProvider>
      </div>
    </div>
  );
}
