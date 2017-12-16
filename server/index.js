const service = require('express')();
const bodyParser = require('body-parser');
// require('dotenv').config();

const controllers = require('./controllers');
const apm = require('elastic-apm-node').start({
  appName: 'client',
  // Use if APM Server requires a token
  secretToken: '',
  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'http://localhost:8200',
});

service.use(bodyParser.json());

service.route('/')
  .get(controllers.getFeed);

service.route('/events')
  .post(controllers.logEvent);

service.use(apm.middleware.express());


const PORT = process.env.PORT || 8080;

service.listen(PORT, () => {
  console.log(`Listing on port ${PORT}`);
});
