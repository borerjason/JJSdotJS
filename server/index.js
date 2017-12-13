const express = require('express');
const { populateExperimentTable } = require('../database/seed');

const app = express();
// populateExperimentTable();
app.get('/', (req, res) => res.send('Hello World!'))

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listing on port ${PORT}`));
