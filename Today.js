import React from "react";
import Listrender from "./Listrender";

import style from "./inbox.module.css"; 
export default function Today(props) {
  const date = new Date();
  const filteredList = props.list.filter((task) => {
    if (date.getFullYear() !== task.date.getFullYear()) {
      return false;
    }
    if (date.getMonth() !== task.date.getMonth()) {
      return false;
    }
    if (date.getDate() !== task.date.getDate()) {
      return false;
    }
    return true;
  })
  return (
    <div  className={style.inbox} >
      <h2>Today's Task !!</h2>
      <Listrender list={filteredList} />
    </div>
  );
}
