import React from 'react';
import ReactDOM from 'react-dom';

const { useState, useEffect } = React;

const SearchButton = ( { display } ) => {

  return (
    <div className="search">
      <div className="search-button alternate-font" onClick = { display }>Search</div>
    </div>
  )
}

export default SearchButton;