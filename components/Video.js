import React from "react";

const VideoPage = ({ video }) => {
  return (
    <>
      <video controls autoPlay loop muted style={{ width: "auto", height: "425px" }}>
        <source src={`${video.url}`} />
      </video>
    </>
  );
};

export default VideoPage;
