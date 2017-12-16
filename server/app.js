const express = require('express');

const routes = require('./routes');

const app = express();

app.get('/', routes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listing on port ${PORT}`));
