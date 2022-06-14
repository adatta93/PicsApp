import React from "react";
import { useState } from "react";

const MovieSearch = props => {
  console.log(props);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = e => {
    e.preventDefault();
    props.onMovieSearch(searchTerm);
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSearch}>
        <div className="field">
          <label>Search Movie</label>
          <div className="ui small icon input">
            <input
              type="text"
              autoFocus
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <i className="search icon"></i>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MovieSearch;
