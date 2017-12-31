const redis = require('redis');

const client = redis.createClient(process.env.RED_PORT, 'localhost');
// for deploy
// const client = redis.createClient(process.env.RED_PORT, process.env.RED_HOST);

client.on('connect', () => {
  console.log('connected to redis');
});

module.exports = client;
