import React, { Component, useEffect, useState } from "react";
import gridStyle from "../styles/Grid.module.css";
import VideoPage from "./Video";
import { VideoSlide } from "./VideoSlide";

export const FormSet = ({ videoPairs, handleRadio, counter }) => {
  //FormSet takes the videos and displays them so that only ONE PAIR is shown at a time.

  return (
    <div className={gridStyle["carousel"]}>
      {counter < videoPairs.length ? (
        videoPairs.map((videoSet, index) => {
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
              <VideoSlide videoSet={videoSet} index={index} />
            </div>
          );
        })
      ) : (
        <p>Thank you for your contribution!</p>
      )}
    </div>
  );
};
