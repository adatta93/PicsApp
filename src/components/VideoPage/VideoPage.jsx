import React, { useState } from "react";
import axios from "axios";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import VideoSearchBar from "./VideoSearchBar";

const VideoPage = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [errMsg, setErrMsg] = useState({"msg": "", "detail": ""});

  const onVideoSearch = async term => {
	setErrMsg({"msg": "", "detail": ""}); //reset error message
    const YT_API_KEY = ""; // Youtube API - removed for security
	try {
	  const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            part: "snippet",
            maxResult: 5,
            key: YT_API_KEY,
            q: term
          }
        }
      );
      console.log("response "+response.data);
      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);
	} catch(error){
	  console.log(Object.keys(error.response));
	  console.log(error.response.data.error.message);
	  setErrMsg({"msg": error.message, "detail": error.response.data.error.message});
    }
  };

  const onVideoSelect = video => {
    console.log("Selected Video ", video);
    setSelectedVideo(video);
  };

  return (
    <div>
      <VideoSearchBar onVideoSearch={onVideoSearch} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            {selectedVideo ? (
              <VideoDetail video={selectedVideo} />
            ) : (
              <div></div>
            )}
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </div>
        </div>
      </div>
	  {errMsg.msg && <div className="ui negative message" style={{color: "darkred"}}>
	    <div className="header">{errMsg.msg}</div>
		<p>{errMsg.detail}</p>
	  </div>}
    </div>
  );
};

export default VideoPage;
