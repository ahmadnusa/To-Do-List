import React from "react";

function ToDoItem(props) {
  return (
    <li
      onClick={() => {
        props.onCheck(props.id);
      }}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;
