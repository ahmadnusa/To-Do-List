import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App(props) {
  const [items, setitems] = useState([]);

  function handleClick(task) {
    setitems((prevItems) => {
      return [...prevItems, task];
    });
  }

  function deleteItem(id) {
    setitems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <InputArea onClick={handleClick} />
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <ToDoItem key={index} id={index} text={item} onCheck={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
