import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="definitionsBlock">
              <span className="definitionsParagraph">
                <strong>Definition:</strong> {definition.definition}
              </span>
              <em className="definitionsExample">
                <strong>Example: </strong>
                {definition.example}
              </em>
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
