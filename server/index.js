// ---------------- needed for load testing ----------------

// const apm = require('elastic-apm-node').start({
//   appName: 'client',
//   secretToken: '',
//   serverUrl: 'http://localhost:8200',
// });

// ---------------------------------------------------------

const service = require('express')();
const bodyParser = require('body-parser');
require('dotenv').config();

const controller = require('./controllers');

service.use(bodyParser.json());

service.route('/feed')
  .get(controller.getFeed.feed);

service.route('/events/pages/likes')
  .post(controller.likePage);

service.route('/events/posts/likes')
  .put(controller.likePost);

service.route('/events/adverts/likes')
  .post(controller.likeAdvert);

// service.route('/events/adverts/views')
//   .post(controller.logEvent.logEvent);

// service.use(apm.middleware.express());


const PORT = process.env.PORT || 8080;

service.listen(PORT, () => {
  console.log(`Listing on port ${PORT}`);
});
