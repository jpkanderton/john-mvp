import React from 'react';
import ReactDOM from 'react-dom';

const { useState, useEffect } = React;

const PlayerDetails = ( { display } ) => {

  return (
    <div className="details">
      <div className="details-container">
        <div className="details-button" onClick = { display }>
          <div className="details-text">Tell Me More</div>
        </div>
      </div>
    </div>
  )
}

export default PlayerDetails;