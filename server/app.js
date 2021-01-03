const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/highlight', (req, res) => {
  console.log('GET');
  axios.get('https://www.scorebat.com/video-api/v1/')
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        console.log('error is ', err);
        res.send('error occurred');
      })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
