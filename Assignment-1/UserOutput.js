import React from "react";
import "./UserOutput.css"

const UserOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>UserName: {props.username}</p>
      <p>
        React generic components, for example, Buttons, by their generic nature
        should not know anything about data model and application behavior. That
        being said, generic buttons should not have properties like id, value,
        etc and shouldn’t do any specific operation. Generic buttons are dumb,
        they are pressable, and that’s all.
      </p>
    </div>
  );
};

export default UserOutput;
