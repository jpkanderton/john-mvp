import { getSrc } from './getSrc';

// FIND A TEAM
const findTeam = (teamName, clipsArr) => {
  teamName = teamName.toLowerCase();
  for (var i = 0; i < clipsArr.length; i++) {
    let side1 = clipsArr[i]['side1']['name'].toLowerCase();
    let side2 = clipsArr[i]['side2']['name'].toLowerCase();
    if (side1 === teamName || side2 === teamName) {
      return clipsArr[i];
    }
  }
  return '';
};

// FIND A LEAGUE
const findLeague = (league, leagues, clipsArr) => {
  for (var key in leagues) {
    if (league === key) {
      return clipsArr[leagues[key][getRandomNum(leagues[key])]];
    }
  }
  return '';
};

// GET RANDOM NUMBER
const getRandomNum = (array) => {
  return Math.floor(Math.random() * Math.floor(array.length));
}

// CREATE LEAGUES
const createLeagues = (clipsArr) => {
  var leagues = {};
  for (var i = 0; i < clipsArr.length; i++) {
    let clip = clipsArr[i];
    let competition = clip.competition.name;
    if (!leagues[competition]) {
      leagues[competition] = [i];
    } else {
      leagues[competition].push(i);
    }
  }
  return leagues;
};

// GET A RANDOM CLIP
const getRandomClip = (clipsArr) => {
  return clipsArr.data[Math.floor(Math.random() * Math.floor(clipsArr.data.length))]
}

// CHECK VALID LEAGUE

const isLeagueAval = (clip) => {
  //
  const accessibleLeagues = {
    'ITALY: Serie A': 2019,
    'ENGLAND: Premier League': 2021,
    'ENGLAND: Championship': 2016,
    'SPAIN: La Liga': 2014,
    'GERMANY: BUNDESLIGA': 2002,
    'FRANCE: Ligue 1': 2015,
    'PORTUGAL: Primeira Liga': 2017,
    'EREDEVISIE: ': 2003
  };

  var keys = Object.keys(accessibleLeagues);
  for (var i = 0; i < keys.length; i++) {
    if (keys[i] === clip.competition.name) {
      return true;
    }
  }
  return false;
}

// GET LEAGUE CODE

const getLeagueCode = (clip) => {
  console.log('getLeagueCode clip: ', clip);
  const accessibleLeagues = {
    'ITALY: Serie A': 2019,
    'ENGLAND: Premier League': 2021,
    'ENGLAND: Championship': 2016,
    'SPAIN: La Liga': 2014,
    'GERMANY: BUNDESLIGA': 2002,
    'FRANCE: Ligue 1': 2015,
    'PORTUGAL: Primeira Liga': 2017,
    'EREDEVISIE: ': 2003
  };

  for (var key in accessibleLeagues) {
    if (key === clip.competition.name) {
      return accessibleLeagues[key];
    }
  }

  return null;
}

// GET TEAMS FROM STANDINGS

const getTeamData = (side1, side2, standings) => {

  var result = {};

  for (var i = 0; i < standings.length; i++){
    var currentTeam = standings[i].team.name;
    if ( currentTeam.indexOf(side1) !== -1 ) {
      result.side1 = standings[i];
    }
    if ( currentTeam.indexOf(side2) !== -1 ) {
      result.side2 = standings[i];
    }
  }
  return result;
}


export { findTeam, getRandomClip, createLeagues, findLeague, isLeagueAval, getLeagueCode, getTeamData };