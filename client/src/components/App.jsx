import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ModalSearch from './ModalSearch.jsx';
import PlayerDetails from './PlayerDetails.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import Header from './Header.jsx';
import SearchButton from './SearchButton.jsx';

import { getRandomClip, findTeam, createLeagues, findLeague } from './eventHandling.js';


const { useState, useEffect } = React;

const App = () =>{
  const [show, setShow] = useState(false);
  const [clip, setClip] = useState('');
  const [games, setGames] = useState('');
  const [leagues, setLeagues] = useState('');
  const [validSub, setValidSub] = useState(true);
  const [team, setTeam] = useState('');
  const [league, setLeague] = useState('empty');

  const handleClickOpen = () => {
    setShow(true);
  }

  const handleClickClose = (event) => {
    setShow(false);
    setValidSub(true);
  }

  const handleSearch = (value, type) => {
    console.log('event handle: ');
    if (type === 'league') {
      console.log('1')
      setLeague(value);
    } else {
      console.log('2')
      setTeam(value)
    }
  }

  const handleSubmit = (team, league) => {
    console.log('handle submit');
    console.log('league: ', league);
    console.log('team: ', team);


    let result;
    if (league !== 'empty') {
      result = findLeague(league, leagues, games);
    } else {
      result = findTeam(team, games);
    }
    console.log('result: ', result);
    if (result === '') {
      setValidSub(false);
    } else {
      setShow(false);
      setClip(result);
    }
    setTeam('');
    setLeague('empty');
  }

  useEffect(() => {
    console.log('handle load');
    setShow(false);
    axios.get('https://www.scorebat.com/video-api/v1/')
      .then((response) => {
        setGames(response.data);
        setClip(getRandomClip(response));
        setLeagues(createLeagues(response.data));
      })
      .catch((err) => {
        console.log('error is ', err);
      })
  }, []);

  return (
    <>
    <ModalSearch show = { show } hide = { handleClickClose } submit = { handleSubmit } handleSearch = { handleSearch }leaguesObj = { leagues } validSub = { validSub } team = { team } league = { league }/>
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