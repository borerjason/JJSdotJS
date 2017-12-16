const cassandra = require('cassandra-driver');
require('dotenv').config();

const client = new cassandra.Client({ contactPoints: [process.env.DB_HOST], keyspace: 'client' });

client.connect((err, result) => {
  console.log('index : cassandra connected');
});

module.exports.client = client;
