import React from "react";
import "../main.css";
import ButtonCustom from "./ButtonCustom";

function getHeaderLinks(i) {
  switch (i) {
    case 0:
    default:
      window.location.reload(); break;
    case 1:
      window.open("/templates/about.html", "_blank"); break;
    case 2:
      window.open("/templates/resources.html", "_blank"); break;
    case 3:
      window.open("https://forms.gle/vDYsqrX5e5UhbNZg7/", "_blank"); break;
  }
  return true;
}

function getHeaderItems() {
  let ret = [];
  ['HOME', 'ABOUT', 'RESOURCES', 'FEEDBACK'].forEach((e, i) => {
    ret.push(
      <ButtonCustom
        onClick={() => getHeaderLinks(i)}
        className="customButton headerButton">
          <b>{e}</b>
      </ButtonCustom>
    )
  })
  return ret;
}

export default function AppHeader() {
  return (
    <div className="appHeader flex">
      {getHeaderItems()}
    </div>
  );
}