import { getSrc } from './getSrc';

// FIND A TEAM
const findTeam = (teamName, clipsArr) => {
  console.log('clips arr: ', clipsArr);
  teamName = teamName.toLowerCase();
  for (var i = 0; i < clipsArr.length; i++) {
    let side1 = clipsArr[i]['side1']['name'].toLowerCase();
    let side2 = clipsArr[i]['side2']['name'].toLowerCase();
    // console.log('i: ', i, ' || side1: ', side1 , ' || side2: ', side2);
    // console.log('teamName: ', teamName);
    if (side1 === teamName || side2 === teamName) {
      return clipsArr[i];
    }
  }
  return '';
};

// FIND A LEAGUE
const findLeague = (leagueName, clipsArr) => {
  leagueName = leagueName.toLowerCase();

  for (var i = 0; i < clipsArr.length; i++) {
    let league = clipsArr[i]['competition']['name'].toLowerCase();
    console.log('i: ', i, ' || league: ', league);
    if (side1 === teamName || side2 === teamName) {
      return clipsArr[i];
    }
  }
  return '';
};

// GET
/*
{england: [], spain: []}
*/
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

export { findTeam, getRandomClip, createLeagues };