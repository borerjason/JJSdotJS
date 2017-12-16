const routes = require('express').Router();
const contentPost = require('../post_helpers');

routes.get('/', (req, res) => {
  // serve feed/home page to the user
  // fetch information from content service
  // check if they are in experimental group

  res.send('Hello World!');
});

routes.post('/events/pages/likes', (req, res) => {
  const id = req.body.pageId;
  // Add event information to DB
  // send content service the id of the page liked by the client
  // send event info to ELK for stress test analysis

  res.send('Hello World!');
});

routes.post('/events/posts/likes', (req, res) => {
  // Add event information to DB
  // send content service the id of the post liked by the client
  // send event info to ELK for stress test analysis

  res.send('Hello World!');
});

routes.post('/events/adverts/likes', (req, res) => {
  // Add event information to DB
  // send content service the id of the adverts liked by the client
  // send event info to ELK for stress test analysis

  res.send('Hello World!');
});

routes.post('/events/adverts/views', (req, res) => {
  // Add event information to DB
  // send content service the id of the adverts liked by the client
  // send event info to ELK for stress test analysis
  // utilize event handler when event is rendered on the page

  res.send('Hello World!');
});

module.exports = routes;
