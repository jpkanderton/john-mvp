import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ModalSearch from './ModalSearch.jsx';
import PlayerDetails from './PlayerDetails.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import Header from './Header.jsx';
import SearchButton from './SearchButton.jsx';

const { useState, useEffect } = React;

const App = () =>{
  const [show, setShow] = useState(false);

  const handleClickOpen = () => {
    setShow(true);
  }

  const handleClickClose = (event) => {
    setShow(false);
  }

  const handleSubmit = (name, nationality, age, league) => {
    axios.get('https://www.scorebat.com/video-api/v1/')
      .then((response) => {
        console.log('response:\n', response);
      })
      .catch((err) => {
        console.log('error is ', err);
      })
  }

  return (
    <>
    <ModalSearch show = { show } hide = { handleClickClose } submit = { handleSubmit }/>
    <div className="container">
      <Header/>
      <SearchButton display = { handleClickOpen }/>
      <VideoPlayer/>
      <PlayerDetails/>
    </div>
    </>
  )
}

export default App;