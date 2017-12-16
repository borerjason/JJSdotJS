const service = require('express')();
const bodyParser = require('body-parser');
require('dotenv').config();

const controller = require('./controllers');

/*
  --- uncomment for load lesting during dev ---

const apm = require('elastic-apm-node').start({
  appName: 'client',
  // Use if APM Server requires a token
  secretToken: '',
  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'http://localhost:8200',
});

service.use(apm.middleware.express());

*/

service.use(bodyParser.json());

service.route('/')
  .get(controller.getFeed.feed);

service.route('/events')
  .post(controller.logEvent.logEvent);


const PORT = process.env.PORT || 8080;

service.listen(PORT, () => {
  console.log(`Listing on port ${PORT}`);
});
