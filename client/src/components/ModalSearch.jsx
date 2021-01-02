import React from 'react';
import ReactDOM from 'react-dom';

const { useState, useEffect } = React;

const ModalSearch = ({ show, hide, submit, leaguesObj, validSub }) => {
  const [team, setTeam] = useState('');
  const [league, setLeague] = useState('empty');

  let leaguesArr = Object.keys(leaguesObj);
  let leagues = leaguesArr.map((currentLeague) =>
    <option value={currentLeague}>{currentLeague}</option>
  );

  return (
    <div>
      {console.log('team and league: ', team ,' and ', league)}
      {show ? <div onClick = { hide } className="backdrop"></div> : null}
      {show && validSub ?
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
          <select onChange = {(event) => setLeague(event.target.value) } onBlur = {(event) => setLeague(event.target.value) }>
            <option value="empty"></option>
            {leagues}
          </select>
        </label>
        <button type="button" value="Submit" onClick = { () => { submit(team, league) }}>Submit</button>
      </form>
      :  null}
      {show && !validSub ?
        <div className="invalid-sub">Invalid Submission</div>
      : null}
    </div>
  )
}

export default ModalSearch;