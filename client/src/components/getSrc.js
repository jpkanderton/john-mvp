const getSrc = (embed) => {
  let srcArray = embed.split(' ');
  return srcArray[5].slice(5, (srcArray[5].length -1));
};

export { getSrc };