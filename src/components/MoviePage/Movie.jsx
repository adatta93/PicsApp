import React from "react";
import "./MoviePage.css";

const Movie = ({ movie }) => {
  const { Title, Year, Poster, imdbID } = movie;
  const imdbLink = `https://www.imdb.com/title/${imdbID}/`;
  return (
    <a
      className="ui card"
      href={imdbLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="image">
        <img alt={`The movie titled: ${Title}`} src={Poster} />
      </div>
      <div className="content">
        <div className="header">{Title}</div>
        <div className="meta">{Year}</div>
      </div>
    </a>
  );
};

export default Movie;
