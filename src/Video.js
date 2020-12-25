import React, { useRef } from "react";
import "./Video.css";
import ReactPlayer from "react-player";
import VideoSidebar from "./VideoSidebar";
import Header from "./Header";

function Video({ url, votes, title }) {
  const videoRef = useRef(null);

  return (
    <div className="video">
      <Header title={title} />
      <ReactPlayer
        ref={videoRef}
        className="video__player"
        playing={true}
        controls
        width="100%"
        height="100%"
        url={url}
      />
      {/* Video Footer */}
      <VideoSidebar votes={votes} />
    </div>
  );
}

export default Video;
