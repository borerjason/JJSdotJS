const express = require('express');

const routes = require('./routes');
const likes = require('./routes/likes');

const app = express();

app.get('/', routes);
app.post('/events/likes', likes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listing on port ${PORT}`));
