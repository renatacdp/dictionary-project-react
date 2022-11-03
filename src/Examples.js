import React from "react";

export default function Examples(props) {
  if (props.example && props.example !== null) {
    return (
      <div className="Examples">
        <strong>Example: </strong>
        {props.example}
      </div>
    );
  } else {
    return null;
  }
}
