// require('newrelic');

const service = require('express')();

const bodyParser = require('body-parser');
require('dotenv').config();

const controller = require('./controllers');

service.use(bodyParser.json());

service.route('/')
  .get((req, res) => {
    res.send('Hello!');
  });

// add userID as a query param once load testing is done
service.route('/feed?userId=:id')
  .get(controller.getFeed);

service.route('/events/pages/likes')
  .post(controller.likePage);

service.route('/events/posts/likes')
  .put(controller.likePost);

service.route('/events/adverts/likes')
  .post(controller.likeAdvert);

service.route('/events/adverts/clicks')
  .post(controller.clickAdvert);

service.route('/events/adverts/views')
  .post(controller.viewAdvert);


const PORT = process.env.PORT || 3000;

service.listen(PORT, () => {
  console.log(`Listing on port ${PORT}`);
});
