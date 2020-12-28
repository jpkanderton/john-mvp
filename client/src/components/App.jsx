import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { GiSoccerKick } from 'react-icons/gi';

import SearchBar from './SearchBar.jsx';
import PlayerDetails from './PlayerDetails.jsx';
import VideoPlayer from './VideoPlayer.jsx';

const { useState, useEffect } = React;

const App = () =>{
  //
  return (
    <div className="container">
      <div className="header">
        <div id="soccer-logo">< GiSoccerKick /></div>
        <div id="soccer-title-1">Who</div>
        <div id="soccer-title-2">Scored?!</div>
      </div>
      <SearchBar/>
      <VideoPlayer/>
      <PlayerDetails/>
    </div>
  )
}

export default App;