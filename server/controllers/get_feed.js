const redis = require('redis');
require('dotenv').config();

const fetchFeed = require('../helpers/fetch_feed');

// process.env.RED_PORT, process.env.RED_HOST)
const client = redis.createClient(process.env.RED_PORT, process.env.RED_HOST);

client.on('connect', function (res, err) {
  console.log('connected to redis');
});

require('../../dummy_data/mocks');

module.exports = (req, res) => {
  const userId = Math.floor(Math.random() * 10);

  client.get(userId, (err, reply) => {
    // if feed is cached send current cached feed back to client
    if (reply) {
      const userFeed = JSON.parse(reply);
      res.send(200, userFeed);
      // add this function to kue
      // in order to update add this part of the function to a queue
      const group = fetchGroup(userId);

      fetchFeed(userId, group)
        .then((result) => {
          client.set(userId, JSON.stringify(result));
        });
    } else {
      const group = fetchGroup(userId);
      // get feed for user who is not in the cache
      fetchFeed(userId, group)
        .then((result) => {
          res.send(200, result);
          client.set(userId, JSON.stringify(result));
        });
    }
  });
};

function fetchGroup(userId) {
  let group = null;
  const groupStr = `${userId}Group`;
  // Check if user is assigned to experiment group and retrieve it or assign it
  client.get(groupStr, (err, reply) => {
    if (reply) {
      group = reply;
    } else {
      const num = Math.floor(Math.random() * 2);
      num === 0 ? group = 1 : group = 3;
      // assign group number to user
      client.set(groupStr, group);
    }
  });
  return group;
}
