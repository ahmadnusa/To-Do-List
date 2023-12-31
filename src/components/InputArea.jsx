import React, { useState } from "react";

function InputArea(props) {
  const [task, settask] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    settask(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} value={task} type="text" />
      <button
        onClick={() => {
          props.onClick(task);
          settask("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
