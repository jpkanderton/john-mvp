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
  const [clip, setClip] = useState('');

  const handleClickOpen = () => {
    setShow(true);
  }

  const handleClickClose = (event) => {
    setShow(false);
  }

  const handleSubmit = (name, nationality, age, league) => {
    console.log('handle submit');
    setShow(false);
    axios.get('https://www.scorebat.com/video-api/v1/')
      .then((response) => {
        console.log('response.data:\n', response.data);
        let randomClip = response.data[Math.floor(Math.random() * Math.floor(response.data.length))];
        console.log('randomClip: ', randomClip);
        setClip(randomClip);
      })
      .catch((err) => {
        console.log('error is ', err);
      })
  }

  useEffect(() => {
    handleSubmit();
  }, []);


  // useEffect(() => {
  //   axios.get('https://www.scorebat.com/video-api/v1/')
  //     .then((response) => {
  //       console.log('response.data:\n', response.data);
  //       let randomClip = response.data[Math.floor(Math.random() * Math.floor(response.data.length))];
  //       console.log('randomClip: ', randomClip);
  //       setClip(randomClip);
  //     })
  //     .catch((err) => {
  //       console.log('error is ', err);
  //     })
  // });


  return (
    <>
    <ModalSearch show = { show } hide = { handleClickClose } submit = { handleSubmit }/>
    <div className="container">
      <Header/>
      <SearchButton display = { handleClickOpen }/>
      <VideoPlayer clip = { clip }/>
      <PlayerDetails/>
    </div>
    </>
  )
}

export default App;