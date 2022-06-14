import axios from "axios";
import React, { useReducer } from "react";
import Movie from "./Movie";
import MovieSearch from "./MovieSearch";
import "./MoviePage.css";
import MovieLoading from "./MovieLoading";

const INITIAL_STATE = {
  movieList: [],
  totalResults: null,
  loading: false,
  errorMsg: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIE_START":
      return {
        ...state,
        loading: true,
        errorMsg: null
      };
    case "SEARCH_MOVIE_SUCCESS":
      return {
        ...state,
        loading: false,
        movieList: action.payload.Search,
        totalResults: action.payload.totalResults
      };
    case "SEARCH_MOVIE_FAILURE":
      return {
        ...state,
        loading: false,
        errorMsg: action.payload
      };
    default:
      return state;
  }
};

const MoviePage = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const onMovieSearch = async searchTerm => {
    dispatch({ type: "SEARCH_MOVIE_START" });
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=4a3b711b&s=${searchTerm}`
    );
    if (response.data.Response === "True") {
      dispatch({ type: "SEARCH_MOVIE_SUCCESS", payload: response.data });
    } else {
      dispatch({ type: "SEARCH_MOVIE_FAILURE", payload: response.data.Error });
    }
  };

  const { movieList, totalResults, loading, errorMsg } = state;

  return (
    <div>
      <MovieSearch onMovieSearch={onMovieSearch} />
      <div className="ui segment" style={{ minHeight: "200px" }}>
        <h2 className="header">Movie List</h2>
        {loading && !errorMsg ? (
          <MovieLoading />
        ) : errorMsg ? (
          <div className="ui error message">{errorMsg}</div>
        ) : (
          <>
            <div className="ui mini statistic">
              {totalResults && (
                <div className="value">{totalResults} movies found</div>
              )}
            </div>
            <div className="ui cards">
              {movieList.map(movie => (
                <Movie key={movie.imdbID} movie={movie} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MoviePage;
