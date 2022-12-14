import React, { useState } from "react";

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState("");
  const onFormSubmit = (e) => {
    e.preventDefault();
    onTermSubmit(term);
  };
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <label>Search Video</label>
        <div className="field">
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
