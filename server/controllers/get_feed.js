const redis = require('redis');
require('dotenv').config();

const fetchFeed = require('../helpers/fetch_feed');

// process.env.RED_PORT, process.env.RED_HOST)
const client = redis.createClient();

client.on('connect', function (res, err) {
  console.log('connected to redis');
});

require('../../dummy_data/mocks');

module.exports = (req, res) => {
  const userId = Math.floor(Math.random() * 10);
  const groupStr = `${userId}Group`;

  client.get(userId, (err, reply) => {
    if (reply) {
      const userFeed = JSON.parse(reply);
      res.send(200, userFeed);
      // in order to update add this part of the function to a queue
      // fetchFeed(0)
      //   .then((result) => {
      //     client.set(userId, JSON.stringify(result));
      //   });
    } else {
      let group = null;
      // Check if user is assigned to experiment group and retrive it or assign it
      client.get(groupStr, (err, reply) => {
        if (reply) {
          group = reply;
        } else {
          const num = Math.floor(Math.random() * 2);
          num === 0 ? group = 1 : group = 3;
          // assign group number to user
          client.set(groupStr, group);
        }
        // get feed for user who is not in the cache
        fetchFeed(userId, group)
          .then((result) => {
            res.send(200, result);
            client.set(userId, JSON.stringify(result));
          });
      });
    }
  });
};
