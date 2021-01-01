import React from 'react';
import ReactDOM from 'react-dom';

const { useState, useEffect } = React;

const ModalSearch = ({ show, hide, submit }) => {
  const [team, setTeam] = useState('');
  const [league, setLeague] = useState('');

  return (
    <div>
      {show ? <div onClick = { hide } className="backdrop"></div> : null}
      <form
        style={{
          transform: show ? 'translatey(0vh)' : 'translatey(-100vh)',
        }}
      >
        <label>
          Team:
          <input
            type = "text"
            value = { team }
            onChange = {(event) => setTeam(event.target.value) }
          />
        </label>
        <label>
          League:
          <input
            type = "text"
            value = { league }
            onChange = {(event) => setLeague(event.target.value) }
          />
        </label>
        <button type="button" value="Submit" onClick = { submit }>Submit</button>
      </form>
    </div>
  )
}

export default ModalSearch;