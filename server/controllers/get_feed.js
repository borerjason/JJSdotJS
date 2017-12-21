const axios = require('axios');
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
  const userId = 5;
  client.get(userId, (err, reply) => {
    if (reply) {
      console.log('User ID: ', userId);
      const userFeed = JSON.parse(reply);
      res.send(200, userFeed);
      // in order to update add this part of the function to a queue
      // fetchFeed(0)
      //   .then((result) => {
      //     client.set(userId, JSON.stringify(result));
      //   });
    } else {
      console.log('User ID: ', userId);
      fetchFeed(userId)
        .then((result) => {
          console.log('Result', result);
          res.send(200, result);
          client.set(userId, JSON.stringify(result));
        });
    }
  });
};

