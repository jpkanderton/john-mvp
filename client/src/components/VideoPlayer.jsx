import React from 'react';
import ReactDOM from 'react-dom';
import getSrc from './getSrc';

const { useState, useEffect } = React;

const VideoPlayer = ( { clip } ) => {
  console.log('clip.embed: ', clip.embed);
  if (clip.embed === undefined) {
    return (
      <div className="player">Hey</div>
    )
  }
  var newSrc = getSrc(clip.embed);
  return (
    <div className="player">
      {/* <iframe scrolling="no" src='https://www.scorebat.com/embed/g/960635/?s=2' style={{width:'99%',height:'100%',left:'0px',top:'0px',overflow:'hidden'}}></iframe> */}

      <div class='iframe-container'>
        <iframe scrolling="no" src={newSrc} frameborder='0' width='560' height='650'></iframe>
      </div>
    </div>
  )
}

export default VideoPlayer;