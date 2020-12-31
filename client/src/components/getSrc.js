// var input = "<div style='width:100%;height:0px;position:relative;padding-bottom:calc(56.25% + 335px);' class='_scorebatEmbeddedPlayerW_'><iframe src='https://www.scorebat.com/embed/g/935434/?s=2' frameborder='0' width='560' height='650' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;' class='_scorebatEmbeddedPlayer_'></iframe></div>"

const getSrc = (embed) => {
  let srcArray = embed.split(' ');
  console.log(srcArray);
  let newArr = srcArray[5].slice(5, (srcArray[5].length -1));
  console.log(newArr);
  return newArr;
};

// getSrc(input);

export default getSrc;