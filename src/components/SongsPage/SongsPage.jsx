import React from "react";
import SongDetail from "./SongDetail";
import SongsList from "./SongsList";

const SongsPage = () => {
  return (
    <div className="ui segment grid">
      <div className="ui row">
        <div
          className="column eight wide"
          style={{ borderRight: "1px solid #555" }}
        >
          <SongsList />
        </div>
        <div
          className="column eight wide"
          style={{ display: "flex", alignItems: "center" }}
        >
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default SongsPage;
