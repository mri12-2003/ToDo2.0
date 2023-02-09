import React from "react";
import Listrender from "./Listrender";
import style from "./inbox.module.css";
export default function Next7days(props) {
  const date = new Date();

  const filteredList = props.list.filter((task) => {
    const diffTime = task.date - date;

    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 7 && diffDays > 0) {
      return true;
    } else {
      return false;
    }
  });
  return (
    <div className={style.inbox}>
      <h2>Next 7 day's plan !!</h2>
      <Listrender list={filteredList} />
    </div>
  );
}
