const cassandra = require('cassandra-driver');
const { populateExperimentTable } = require('../database/seed');

const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], keyspace: 'client' });

client.connect((err, result) => {
  console.log('index : cassandra connected');
  // populateExperimentTable();
});

module.exports.client = client;

// create client keyspace
// CREATE KEYSPACE client with REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 3};

// create events table
// CREATE TABLE events (id uuid PRIMARY KEY, userID int, category text, date timestamp, experimentGroup int);

// query example
