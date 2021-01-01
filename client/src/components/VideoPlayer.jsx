import React from 'react';
import ReactDOM from 'react-dom';
import { getSrc } from './getSrc';

const { useState, useEffect } = React;

const VideoPlayer = ( { clip } ) => {
  if (clip.embed === undefined) {
    return (
      <div className="player"></div>
    )
  }
  var newSrc = getSrc(clip.embed);
  return (
    <div className="player">
      <div class='iframe-container'>
        <iframe scrolling="no" src={newSrc} frameborder='0' width='560' height='650'></iframe>
      </div>
    </div>
  )
}

export default VideoPlayer;