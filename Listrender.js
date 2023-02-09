import React from "react";
import "./App.css";
export default function Listrender(props) {
  return (
    <div>
      {props.list.map((list) => {
        return (
          <div>
            <div className="App">
                {list.title} ({list.date.toLocaleString()})</div>
          </div>
        );
      })}
    </div>
  );
}
