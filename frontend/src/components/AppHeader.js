import React from "react";
import "../main.css";
import CustomButton from "./CustomButton";

const FORM_URL = "https://forms.gle/vDYsqrX5e5UhbNZg7/";
const items = ['HOME', 'ABOUT', 'RESOURCES', 'FEEDBACK', "SHARE"];

function getHeaderLinks(item) {
  var i = 0;
  switch (item) {
    case items[i++]:
      window.location.reload();
      break;
    case items[i++]:
      window.open("/templates/about.html", "_blank");
      break;
    case items[i++]:
      window.open("/templates/resources.html", "_blank");
      break;
    case items[i++]:
      window.open(FORM_URL, "_blank");
      break;
    default:
      return "/"
  }
  return true;
}

function getHeaderItems() {
  let ret = [];
  items.forEach((item) => {
    ret.push(<CustomButton
      onClick={() => getHeaderLinks(item)}
      className="customButton headerButton">
      <b>{item}</b>
    </CustomButton>)
  })
  return ret;
}

export default function AppHeader(props) {
  return (
    <div
      className={props.className}
    >
      {getHeaderItems()}
    </div>
  );
}