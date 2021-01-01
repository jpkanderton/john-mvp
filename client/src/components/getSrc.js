const getSrc = (embed) => {
  let srcArray = embed.split(' ');
  console.log(srcArray);
  let newArr = srcArray[5].slice(5, (srcArray[5].length -1));
  console.log(newArr);
  return newArr;
};

export default getSrc;