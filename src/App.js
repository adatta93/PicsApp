import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import ImagePage from "./components/ImagePage/ImagePage";
import MoviePage from "./components/MoviePage/MoviePage";
import PostList from "./components/PostPage/PostList";
import SongsPage from "./components/SongsPage/SongsPage";
import VideoPage from "./components/VideoPage/VideoPage";
import TranslatePage from "./components/TranslatePage/TranslatePage";

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <BrowserRouter>
        <Link to="/image" className="ui black button">
          Image
        </Link>
        <Link to="/video" className="ui red button">
          Video
        </Link>
        <Link to="/songs" className="ui green button">
          Songs
        </Link>
        <Link to="/posts" className="ui purple button">
          Posts
        </Link>
        <Link to="/movies" className="ui primary button">
          Movies
        </Link>
        <Link to="/translate" className="ui button">
          Translate
        </Link>
        <Route path="/image" exact component={ImagePage} />
        <Route path="/video" exact component={VideoPage} />
        <Route path="/songs" exact component={SongsPage} />
        <Route path="/posts" exact component={PostList} />
        <Route path="/movies" exact component={MoviePage} />
        <Route path="/translate" exact component={TranslatePage} />
      </BrowserRouter>
    </div>
  );
};

export default App;
