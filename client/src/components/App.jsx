import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ModalSearch from './ModalSearch.jsx';
import PlayerDetails from './PlayerDetails.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import Header from './Header.jsx';
import SearchButton from './SearchButton.jsx';
import TeamsModal from './TeamsModal.jsx';

import { getRandomClip, findTeam, createLeagues, findLeague, isLeagueAval, getLeagueCode } from './eventHandling.js';

const { useState, useEffect } = React;

const App = () =>{
  const [show, setShow] = useState(false);
  const [clip, setClip] = useState('');
  const [games, setGames] = useState('');
  const [leagues, setLeagues] = useState('');
  const [validSub, setValidSub] = useState(true);
  const [team, setTeam] = useState('');
  const [league, setLeague] = useState('empty');
  const [leagueStandings, setLeagueStandings] = useState('');
  const [tellMeMore, setTellMeMore] = useState(false);
  const [leagueAccess, setLeagueAccess] = useState(true);

  const tellMeShow = () => {
    setTellMeMore(true);
  }

  const tellMeHide = () => {
    setTellMeMore(false);
  }

  const handleClickOpen = () => {
    setShow(true);
  }

  const handleClickClose = (event) => {
    setShow(false);
    setValidSub(true);
  }

  const handleSearch = (value, type) => {
    if (type === 'league') {
      setLeague(value);
    } else {
      setTeam(value)
    }
  }

  const handleSubmit = (team, league) => {
    let result;
    if (league !== 'empty') {
      result = findLeague(league, leagues, games);
    } else {
      result = findTeam(team, games);
    }
    if (result === '') {
      setValidSub(false);
    } else {
      setShow(false);
      setClip(result);
      setLeagueAccess(isLeagueAval(result))
    }
    setTeam('');
    setLeague('empty');
  }

  const handleDataReq = () => {


    axios.get()
      .then((results) =>{
        //
      })
      .catch((error) => {
        //
        console.log('retrieving result error');
      })
  }

  useEffect(() => {
    console.log('handle load');
    setShow(false);
    axios.get('/highlight')
      .then((response) => {
        setGames(response.data);
        var randomClip = getRandomClip(response);
        console.log('code: ', getLeagueCode(randomClip));
        setClip(randomClip);
        setLeagueAccess(isLeagueAval(randomClip));
        setLeagues(createLeagues(response.data));
      })
      .catch((err) => {
        console.log('error is ', err);
      })
  }, []);

  return (
    <>
    <ModalSearch show = { show } hide = { handleClickClose } submit = { handleSubmit } handleSearch = { handleSearch }leaguesObj = { leagues } validSub = { validSub } team = { team } league = { league }/>

    <TeamsModal show = { tellMeMore } hide = { tellMeHide } display = { tellMeShow } leagueAccess = { leagueAccess }/>

    <div className="container">
      <Header/>
      <SearchButton display = { handleClickOpen }/>
      <VideoPlayer clip = { clip }/>
      <PlayerDetails display = { tellMeShow }/>
    </div>
    </>
  )
}

export default App;