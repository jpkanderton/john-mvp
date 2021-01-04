import React from 'react';
import ReactDOM from 'react-dom';

import { getTeamData } from './eventHandling.js';

const { useState, useEffect } = React;

const TeamsModal = ({show, display, hide, leagueAccess, leagueStandings, clip }) => {

  var teams;
  console.log('leagueStandings.standings: ', leagueStandings.standings);
  if (leagueStandings.standings && clip.side1) {
      console.log('clip teams modal: ', clip.side1.name, clip.side2.name);
    teams = getTeamData(clip.side1.name, clip.side2.name, leagueStandings.standings);
  }
  console.log('Teams Modal league Standings:');
  console.log(teams);

  return (
    <div>
      {show ? <div onClick = { hide } className="backdrop"></div> : null}

        {leagueAccess ? <div className='teams-modal-container'
          style={{
            transform: show ? 'translateY(0vh)' : 'translateY(100vh)'
          }}
        >
          <div className='teams-side1-container'></div>
          <div className='teams-side2-container'></div>
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
    </div>

  )
}

  export default TeamsModal;