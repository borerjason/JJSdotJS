const cassandra = require('cassandra-driver');
require('dotenv').config();

const client = new cassandra.Client({ contactPoints: [process.env.DB_HOST], keyspace: 'client' });

client.connect((err, result) => {
  if (result) {
    console.log('cassandra connected');
  }
  if (err) {
    console.log('Cannot connect to cassandra: ', err);
  }
});

module.exports.client = client;
