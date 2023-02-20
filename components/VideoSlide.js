import gridStyle from "../styles/Grid.module.css";
import VideoPage from "./Video";

export const VideoSlide = ({ videoSet, index }) => {
  //VideoSlide renders the video pair given.
  return (
    <>
      {videoSet.map((video, vidIndex) => {
        //... takes that pair to render,
        return (
          <div key={index + vidIndex} className={gridStyle["card"]}>
            <h2 className={gridStyle["h2"]}>{video.title}</h2>
            <p>{video.url}</p>
            <VideoPage video={video} />
            <div className={gridStyle["input_cont"]}>
              <input
                type="radio"
                name={`pair${index}`}
                value={video.id}
                className={gridStyle.inputsu}
                required
              />
              <label className={gridStyle.label}>{video.title}</label>
            </div>
          </div>
        );
      })}
    </>
  );
};
