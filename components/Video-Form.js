import React, { useState } from "react";
import { videoList } from "../videoList";
import gridStyle from '../styles/Grid.module.css'

const VideoForm = ({ videosTest }) => {
  const [selectedVideo, setSelectedVideo] = useState({});
  const [counter, setCounter] = useState(0);
  const [canSubmit, setCansubmit] = useState(false);

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setSelectedVideo((prev) => {
      return { ...prev, [name]: value };
    });
    //setSelectedVideo(e.target.value);
    console.log(e.target.value);
    console.log(selectedVideo);
  };
  const handleNext = () => {
    console.log(counter);
    setCounter(counter + 1);
    console.log("Selected video:", selectedVideo);
    if (counter >= videoList.length) {
      setCansubmit(true);
    }
  };

  const handleSubmit = (e) => {
    //submit shit
    //adda en datafolder med data.js || data.json  o lägg till svar där. chatGPT
  };
  const display = (lista) => {
    return (
      <div onChange={handleRadioChange} className={gridStyle["grid"]}>
        {lista.map((video, index) => (
          <div key={counter + index} className={gridStyle["card"]}>
            <h2 className={gridStyle["h2"]}>{video.title}</h2>
            <p>{video.url}</p>
            <video autoPlay controls loop muted style={{ width: "auto", height: "400px" }}>
              <source src={video.url} />
            </video>
            <div className={gridStyle["input_cont"]}>
          {console.log(video)}
        <input
          type="radio"
          name={`pair${counter}`}
          value={video.id}
          required
        />
        <label>{video.title}</label>
        </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <form id="vid-form" onSubmit={handleSubmit} autoComplete="Off">
      {display(videoList[counter])}
      <button onClick={handleNext} disabled={canSubmit}>
        Next
      </button>
      <button type="submit" disabled={!canSubmit}>
        Submit
      </button>
    </form>
  );
};

export default VideoForm;