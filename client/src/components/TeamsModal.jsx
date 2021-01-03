import React from 'react';
import ReactDOM from 'react-dom';

const { useState, useEffect } = React;

const TeamsModal = ({show, display, hide }) => {
  //
  return (
    <div>
      {show ? <div onClick = { hide } className="backdrop"></div> : null}
        <div className='teams-modal-container'
          style={{
            transform: show ? 'translateY(0vh)' : 'translateY(100vh)'
          }}
        >
          <div className='teams-side1-container'></div>
          <div className='teams-side2-container'></div>
        </div>
    </div>
  )
}

  export default TeamsModal;