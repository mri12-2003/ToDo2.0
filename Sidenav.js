import React from "react";
import "./App.css";
import style from "./sidenav.module.css";
export default function Sidenav(props) {
  return (
    <div  className={style.inbox}>
      <p
        onClick={() => {
          props.change("Inbox");
        }}
      >
        <div    >Inbox</div>
      </p>
      <p
        onClick={() => {
          props.change("Today");
        }}
      >
        <div >Today</div>
      </p>
      <p onClick={() => {
          props.change("Next");
        }}>
        <div >Next 7 days </div>{" "}
      </p>
    </div>
  );
}
