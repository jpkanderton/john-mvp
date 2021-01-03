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
      {validSub ?
      <form
        style={{
          transform: show ? 'translateY(0vh)' : 'translateY(-100vh)'
        }} className="small-font"
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
      {show ?
        <div className="invalid-sub alternate-font"
          style={{
            height: !validSub ? '150px' : '390px',
            'z-index': !validSub ? '2' : '-1',
            color: '#F64C72'
        }}
        >
          <div>Invalid Submission</div>
        </div>
      : null}
    </div>
  )
}

export default ModalSearch;