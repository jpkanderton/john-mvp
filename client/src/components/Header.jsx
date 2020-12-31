import React from 'react';
import ReactDOM from 'react-dom';
import { GiSoccerKick } from 'react-icons/gi';

const { useState, useEffect } = React;

const Header = () => {
  //
  return (
    <div className="header">
      <div id="soccer-logo">< GiSoccerKick /></div>
      <div className ="soccer-title-container">
        <div className="soccer-title">Who</div>
        <div className="soccer-title">Scored?!</div>
      </div>
    </div>
  )
}

export default Header;