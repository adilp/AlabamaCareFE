import React, { useState } from "react";
import "./VideoSidebar.css";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

function VideoSidebar({ votes }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <ThumbUpAltOutlinedIcon
            fontSize="large"
            onClick={(event) => setLiked(false)}
          />
        ) : (
          <ThumbUpIcon fontSize="large" onClick={(event) => setLiked(true)} />
        )}
      </div>

      <div className="videoSidebar__button">
        <p>{liked ? votes : votes + 1}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
