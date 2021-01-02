import { getSrc } from './getSrc';

// FIND A TEAM
const findTeam = (teamName, clipsArr) => {
  console.log('clips arr: ', clipsArr);
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

export { findTeam, getRandomClip, createLeagues, findLeague };