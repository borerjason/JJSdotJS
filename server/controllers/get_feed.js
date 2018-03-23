const client = require('../../cache');
const queue = require('../../workers');
const fetchFeed = require('../helpers/fetch_feed');
const fetchGroup = require('../helpers/fetch_group');

require('dotenv').config();
require('../../dummy_data/mocks');

module.exports = (req, res) => {
  const userId = Math.floor(Math.random() * 5);
  client.get(userId, (err, reply) => {
    if (reply) {
      const userFeed = JSON.parse(reply);
      const startIndex = userFeed[userFeed.length - 1];
      const endIndex = userFeed[startIndex + 10] ? startIndex + 10 : userFeed.length - 1;
      const feedSection = userFeed.slice(startIndex, endIndex);
      res.send(200, feedSection);
      if (endIndex - startIndex < 10) {
        client.del(userId);
      }
      queue.create('cacheFeed', {
        userId,
      }).save();
    } else {
      const group = fetchGroup(userId);
      fetchFeed(userId, group)
        .then((result) => {
          res.send(200, result);
          result.push(0);
          client.set(userId, JSON.stringify(result), 'EX', 60 * 30);
        });
    }
  });
};
