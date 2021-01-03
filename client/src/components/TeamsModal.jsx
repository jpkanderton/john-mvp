import React from 'react';
import ReactDOM from 'react-dom';

const { useState, useEffect } = React;

const TeamsModal = ({show, display, hide, leagueAccess }) => {

  console.log('league access: ', leagueAccess);

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