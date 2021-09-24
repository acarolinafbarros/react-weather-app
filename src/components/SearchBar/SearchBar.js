import React, { useState } from "react";
import "./SearchBar.css";

export const SearchBar = ({ searchSubmit, inputStatusError, inputMessageError }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="search" data-testid="search-bar">
      <span data-testid="search-label">Enter city:</span>
      <div className="inputContainer">
        <input
          data-testid="search-input"
          className="input"
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
          placeholder="Search city"
        ></input>
        <button data-testid="search-button" className="searchButton" onClick={() => searchSubmit(inputValue)}>
          Search
        </button>
      </div>
      {inputStatusError && (
        <span data-testid="search-input-error" className="errorMessage">
          {inputMessageError}
        </span>
      )}
    </div>
  );
};
