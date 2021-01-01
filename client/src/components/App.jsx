import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ModalSearch from './ModalSearch.jsx';
import PlayerDetails from './PlayerDetails.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import Header from './Header.jsx';
import SearchButton from './SearchButton.jsx';

import { getRandomClip, findTeam } from './eventHandling.js';


const { useState, useEffect } = React;

const App = () =>{
  const [show, setShow] = useState(false);
  const [clip, setClip] = useState('');
  const [games, setGames] = useState('');

  const handleClickOpen = () => {
    setShow(true);
  }

  const handleClickClose = (event) => {
    setShow(false);
  }

  const handleSubmit = (team, league) => {
    console.log('handle submit');
    setShow(false);
    let result = findTeam(team, games);
    console.log('result: ', result);
    setClip(result);
  }

  useEffect(() => {
    console.log('handle load');
    setShow(false);
    axios.get('https://www.scorebat.com/video-api/v1/')
      .then((response) => {
        setGames(response.data);
        setClip(getRandomClip(response));
      })
      .catch((err) => {
        console.log('error is ', err);
      })
  }, []);

  return (
    <>
    <ModalSearch show = { show } hide = { handleClickClose } submit = { handleSubmit }/>
    <div className="container">
      {/* {console.log('setGames: ', games)} */}
      <Header/>
      <SearchButton display = { handleClickOpen }/>
      <VideoPlayer clip = { clip }/>
      <PlayerDetails/>
    </div>
    </>
  )
}

export default App;