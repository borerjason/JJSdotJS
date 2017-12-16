const routes = require('express').Router();

routes.get('/', (req, res) => {
  // serve feed/home page to the user
  res.send('Hello World!');
});

module.exports = routes;
