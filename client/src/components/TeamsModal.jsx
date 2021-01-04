import React from 'react';
import ReactDOM from 'react-dom';

import { getTeamData } from './eventHandling.js';

const { useState, useEffect } = React;

const TeamsModal = ({show, display, hide, leagueAccess, leagueStandings, clip, showTeamModal, displayTeamModal }) => {

  var teams;
  if (leagueStandings.standings && clip.side1) {
    teams = getTeamData(clip.side1.name, clip.side2.name, leagueStandings.standings);
  }

  if (teams){
    console.log('teams: ', teams);
  }

  return (
    <div>
      {show ? <div onClick = { hide } className="backdrop"></div> : null}

        {leagueAccess && teams ? <div className='teams-modal-container'
          style={{
            transform: show ? 'translateY(0vh)' : 'translateY(100vh)'
          }}
        >
          <div className='team-logo-container'>
            {teams.side1 ?
            <img src = {teams.side1.team.crestUrl} onClick = { displayTeamModal } ></img> : <img src = 'https://assets.stickpng.com/images/5a4613e5d099a2ad03f9c995.png' ></img> }
          </div>
          <div className='team-logo-container'>
            {teams.side2 ?
            <img src = {teams.side2.team.crestUrl} onClick = { displayTeamModal } ></img> : <img src = 'https://assets.stickpng.com/images/5a4613e5d099a2ad03f9c995.png' ></img> }
          </div>
        </div>
        :
        <div className='teams-modal-container'
          style={{
            transform: show ? 'translateY(0vh)' : 'translateY(100vh)'
          }}
        >
          <div className='no-league-access-container'>
            <div className='no-league-access-text'>No League Access</div>
          </div>
        </div>
        }
        {showTeamModal ?
        <div className='teams-modal-container'>
          Hello
        </div>
        : null}
    </div>
  )
}

  export default TeamsModal;