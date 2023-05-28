const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.send('welcome home');
});
app.get('/books', (req, res) => {
  res.send('hahahahahahahhahahaaiidhiagduogauodhguagdigaiduygiuagduagdiu');
});
app.listen(8000, () => {
  console.log('server is listening...');
});
