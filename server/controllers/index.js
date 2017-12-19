module.exports.getFeed = require('./get_feed');
module.exports.logEvent = require('./log_event');
module.exports.likePost = require('./like_post');
module.exports.likePage = require('./like_page');
module.exports.likeAdvert = require('./like_advert');
// module.exports.clickAdvert = require('./click_advert');


/*
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

*/