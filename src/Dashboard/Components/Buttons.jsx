import React from "react";

function Buttons(props) {
  return (
    <div className="buttons">
      <button
        id={props.id}
        onClick={props.handleClick}
        style={{ color: "white" , backgroundColor: props.color }}
        className="buttons rounded-lg h-[7vh] w-[20vh] border-2" 
      >
        NEW QUOTE
      </button>
    </div>
  );
}

export default Buttons;
