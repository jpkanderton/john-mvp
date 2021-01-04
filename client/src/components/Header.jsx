import React from 'react';
import ReactDOM from 'react-dom';
import { GiSoccerKick } from 'react-icons/gi';

const { useState, useEffect } = React;

const Header = () => {
  //
  return (
    <div className="header main-font">
      <div id="soccer-logo">< GiSoccerKick /></div>
      {/* <div id="soccer-logo">JA</div> */}
      <div className ="soccer-title-container">
        <div className="soccer-title">Show Me All</div>
        <div className="soccer-title">The HighLights?!</div>
      </div>
    </div>
  )
}

export default Header;