const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], keyspace: 'client' });

client.connect((err, result) => {
  console.log('index : cassandra connected');
});

module.exports.client = client;
