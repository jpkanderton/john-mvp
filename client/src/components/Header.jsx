import React from 'react';
import ReactDOM from 'react-dom';
import { GiSoccerKick } from 'react-icons/gi';

const { useState, useEffect } = React;

const Header = () => {
  //
  return (
    <div className="header">
      <div id="soccer-logo">< GiSoccerKick /></div>
      <h3 id="soccer-title-1">Who</h3>
      <h3 id="soccer-title-2">Scored?!</h3>
    </div>
  )
}

export default Header;