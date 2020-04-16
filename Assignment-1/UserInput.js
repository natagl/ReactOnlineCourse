import React from "react";

const UserInput = (props) => {
  const style = {
    border: "3px solid pink",
    marginTop: "50px",
  };
  return (
    <input
      type="text"
      style={style}
      onChange={props.changeUsName}
      value={props.currentName}
    />
  );
};

export default UserInput;
//onChange={props.changed} value={props.name}
