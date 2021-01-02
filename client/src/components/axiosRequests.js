const random = () =>
  axios.get('https://www.scorebat.com/video-api/v1/')
    .then((response) => {
      console.log('response.data:\n', response.data);
      let randomClip = response.data[Math.floor(Math.random() * Math.floor(response.data.length))];
      console.log('randomClip: ', randomClip);
      setClip(randomClip);
    })
    .catch((err) => {
      console.log('error is ', err);
    })


const getRandomClip = (clipsArr) => {
  return clipsArr.data[Math.floor(Math.random() * Math.floor(clipsArr.data.length))]
}
export { getRandomClip }