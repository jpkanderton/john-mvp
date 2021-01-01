import { getSrc } from './getSrc';

const findTeam = (teamName, clipsArr) => {
  for (var i = 0; i < clipsArr.length; i++) {
    let side1 = clipsArr[i]['side1']['name'].toLowerCase();
    let side2 = clipsArr[i]['side2']['name'].toLowerCase();
    console.log('i: ', i, ' || side1: ', side1 , ' || side2: ', side2);
    console.log('teamName: ', teamName);
    teamName = teamName.toLowerCase();
    if (side1 === teamName || side2 === teamName) {
      return clipsArr[i];
    }
  }
  return '';
};

const findLeague = () => {
  //
  return;
};

const getRandomClip = (clipsArr) => {
  return clipsArr.data[Math.floor(Math.random() * Math.floor(clipsArr.data.length))]
}

export { findTeam, getRandomClip };