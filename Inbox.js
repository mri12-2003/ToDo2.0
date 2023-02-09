import React, { useRef, useState } from "react";
import "./App.css";
import style from "./inbox.module.css";

export default function Inbox(props) {
  const [newTask, setNewTask] = useState(false);
  const titleRef = useRef("");
  const calendarRef = useRef("");
  const newTaskHander = () => {
    setNewTask(true);
  };

  const addHandler = (e) => {
    e.preventDefault();
    if (titleRef.current.value === "") {
     alert("task cannot be completed !!");
      return;
    }

    let newObj = {
      number: props.list.length + 1,
      title: titleRef.current.value,
      date: new Date(calendarRef.current.value),
    };

    props.append(newObj);
    setNewTask(false);
  };
  const cancelHandler = () => {
    setNewTask(false);
  };
  return (
    <div className={style.inbox}>
      <h2 >Inbox </h2>
      <p>Please Enter Your Task !!</p>
      {!newTask && <button onClick={newTaskHander}  className={style.btn}>Add Task !!</button>}

      {newTask && (
        <form  className={style.form}>
          <input type="text" ref={titleRef}  className={style.forminput}  placeholder= "Enter Your Task"/>
          
          <div>
            <button onClick={(e) => addHandler(e)} className={style.input1}>Add task </button>
            <button onClick={cancelHandler} className={style.input1}>Cancel </button>
            <input type="date" ref={calendarRef} defaultValue="2023-01-01"  className={style.input3}/>
          </div>
        </form>
      )}

      <div>
        {props.list.map((list) => {
          return (
            <div key={list.number}>
              <div>
                {list.title} ({list.date.toLocaleDateString()})
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
