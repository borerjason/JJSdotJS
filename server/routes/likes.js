const likes = require('express').Router();

likes.post('/events/likes', (req, res) => {
  // serve feed/home page to the user
  res.send('Hello World!');
});

module.exports = likes;
