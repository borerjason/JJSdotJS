const express = require('express');
const apm = require('elastic-apm-node').start({

  appName: 'client',
  // Use if APM Server requires a token
  secretToken: '',
  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'http://localhost:8200',
});

const routes = require('./routes');

const app = express();

app.get('/', routes);

app.use(apm.middleware.express());

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listing on port ${PORT}`));
