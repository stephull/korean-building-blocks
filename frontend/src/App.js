import React, {useState} from 'react';
import AppHeader from "./components/AppHeader";
import PropertyPanel from "./components/PropertyPanel";
import PropertyAssist from "./components/PropertyAssist";
import PropertyInteractive from './components/PropertyInteractive';
import "./main.css";
import appLogo from "./images/extra/app_logo.png";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import axios from 'axios';

// a note for the future:
// use some useState to transfer data

// app 
export default function App() {
  // for backend, show announcements if necessary
  const [update, setUpdate] = useState(null);
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

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="mainApp">
        <AppHeader className="appHeader flex" />
        {
          (getUpdate() || update) &&
          <>
            <br/>
              <div style={{display: (update.show) ? 'block' : 'none'}} className="announcement">
                <b style={{
                  fontSize: 'larger', backgroundColor: (update.urgent) ? "yellow" : "white"
                }}>{update.title}</b><br/>
                <small>{update.author}</small><br/>
                <p>{update.msg}</p>
              </div>
            <br/>
          </>
        }
        <div className="title flex">
          <img id="app-logo" src={appLogo} alt="ㄱㄴㄷㄹ - Website Logo" />
          <div>
            <span>Korean Building Blocks</span><br />
            <small>Learn Korean by assembling different characters to create words/sounds.</small>
          </div>
        </div>
        <div className="flex">
          <PropertyPanel />
          <PropertyInteractive />
          <PropertyAssist />
        </div>
      </div>
    </DndProvider>
  );
}
