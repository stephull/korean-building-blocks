import React, {useState} from 'react';
import axios from 'axios';

export default function Announcement() {
  const [update, setUpdate] = useState(null);
  const [showUpdate, setShow] = useState(true);
  function getUpdate() {
    axios({
      method: 'GET',
      url: "/api/announcement",
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
}