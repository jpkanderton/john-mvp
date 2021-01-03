import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ModalSearch from './ModalSearch.jsx';
import PlayerDetails from './PlayerDetails.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import Header from './Header.jsx';
import SearchButton from './SearchButton.jsx';
import TeamsModal from './TeamsModal.jsx';

import { getRandomClip, findTeam, createLeagues, findLeague } from './eventHandling.js';

const wazzup = {
  'ITALY: Serie A': 2019,
  'ENGLAND: Premier League': 2021,
  'ENGLAND: Championship': 2016,
  'SPAIN: La Liga': 2014,
  'GERMANY: BUNDESLIGA': 2002,
  'FRANCE: Ligue 1': 2015,
  'PORTUGAL: Primeira Liga': 2017,
  'EREDEVISIE: ': 2003
};


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
    // console.log('handle submit');
    // console.log('league: ', league);
    // console.log('team: ', team);
    console.log(wazzup);


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