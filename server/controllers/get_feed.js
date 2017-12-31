const client = require('../../cache');
const queue = require('../../workers');
const fetchFeed = require('../helpers/fetch_feed');
const fetchGroup = require('../helpers/fetch_group');

require('dotenv').config();
require('../../dummy_data/mocks');

module.exports = (req, res) => {
  const userId = Math.floor(Math.random() * 5);
  client.get(userId, (err, reply) => {
    // if feed is cached send current cached feed back to client
    if (reply) {
      const userFeed = JSON.parse(reply);
      res.send(200, userFeed);
      queue.create('cacheFeed', {
        userId,
      }).save();
    } else {
      const group = fetchGroup(userId);
      // get feed for user who is not in the cache
      fetchFeed(userId, group)
        .then((result) => {
          res.send(200, result);
          // add this to queue
          client.set(userId, JSON.stringify(result));
        });
    }
  });
};
