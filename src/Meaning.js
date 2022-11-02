import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="definitionsBlock">
              <span className="definitionsParagraph">
                {definition.definition}
              </span>
              <em className="definitionsExample">{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
