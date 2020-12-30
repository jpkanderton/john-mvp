import React from 'react';
import ReactDOM from 'react-dom';

const { useState, useEffect } = React;

const ModalSearch = ({ show, hide }) => {
  const [name, setName] = useState('');
  const [nationality, setNationality] = useState('');
  const [age, setAge] = useState('');
  const [league, setLeague] = useState('');

  return (
    <div>
      {console.log('hi hi hi')}
      {show ? <div onClick = { hide } className="backdrop"></div> : null}
      <form
        style={{
          transform: show ? 'translatey(0vh)' : 'translatey(-100vh)',
        }}
      >
        <label>
          Name:
          <input
            type = "text"
            value = { name }
            onChange = {(event) => setName(event.target.value) }
          />
        </label>
        <label>
          Nationality:
          <input
            type = "text"
            value = { nationality }
            onChange = {(event) => setNationality(event.target.value) }
          />
        </label>
        <label>
          Age:
          <input
            type = "text"
            value = { age }
            onChange = {(event) => setAge(event.target.value) }
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
        <button type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default ModalSearch;