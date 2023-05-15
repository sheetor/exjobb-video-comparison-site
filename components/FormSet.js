import React, { Component, useEffect, useState } from "react";
import gridStyle from "../styles/Grid.module.css";
import VideoPage from "./Video";
//import { VideoSlide } from "./VideoSlide";



export const FormSet = ({ videoPairs, handleRadio, counter, pairs }) => {

  //FormSet takes the videos and displays them so that only ONE PAIR is shown at a time.
  console.log(pairs);
  console.log("pairs");


  return (
    <div className={gridStyle["carousel"]}>
      {counter < videoPairs.length ? (

        /* videoPairs.map((videoSet, index) => { */
        pairs.map((indexPairs, index) => {
          // takes each pair and puts them in a video slide. The "data-visible" checks what slide we're at.
          // If counter is = to the current index then that one is visible.
          // when counter is changed the components will re-render which is why the predicate is check again.

          // The "data-visible" is a property that together with css styling will hide those who are "data-visible=false"
          // and display the one which is true.
          return (
            <div
              onChange={handleRadio}
              className={`${gridStyle["carousel__slide"]} ${gridStyle.fade}`}
              data-visible={counter === index}
              key={index}
            >
              <VideoSlide videoSet={[videoPairs[indexPairs[0]], videoPairs[indexPairs[1]]]} index={index} />
            </div>
          );
        })
      ) : (
        <p>Thank you for your contribution!</p>
      )}
    </div>
  );
};

export const VideoSlide = ({ videoSet, index }) => {
  //VideoSlide renders the video pair given.
  return (
    <>
      {/* {console.log(videoSet)}
    {console.log(index)}
    {console.log("video")} */}
      {videoSet.map((video, vidIndex) => {
        //... takes that pair to render,
        return (
          <div key={index + vidIndex} className={gridStyle["card"]}>
            <h2 className={gridStyle["h2"]}>{vidIndex+1}</h2>
            
            <VideoPage video={video} />
            <div className={gridStyle["input_cont"]}>
              <input
                type="radio"
                name={`pair${index}`}
                value={video.id}
                className={gridStyle.inputsu}
                required
              />
              <label className={gridStyle.label}>{vidIndex+1}</label>
            </div>
          </div>
        );
      })}
      {/* {console.log(videoSet)}
      {console.log("videoSet")} */}
    </>
  );
};