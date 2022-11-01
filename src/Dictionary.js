import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for the definition of ${keyword}...`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function changeBackground(event) {
    event.target.style.background = "white";
    event.target.style.color = "#a393eb";
  }

  function changeToDefaultBackground(event) {
    event.target.style.background = "#a393eb";
    event.target.style.color = "white";
  }

  return (
    <div className="Dictionary">
      <form className="search-form" onSubmit={search}>
        <input
          type="search"
          placeholder="Type any word here..."
          className="search-form-input"
          onChange={handleKeywordChange}
        />
        <button
          onMouseOver={changeBackground}
          onMouseLeave={changeToDefaultBackground}
        >
          Search
        </button>
      </form>
    </div>
  );
}
