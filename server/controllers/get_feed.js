const client = require('../../cache');
const queue = require('../../workers');
const fetchFeed = require('../helpers/fetch_feed');
const fetchGroup = require('../helpers/fetch_group');

require('dotenv').config();
require('../../dummy_data/mocks');

module.exports = (req, res) => {
  console.log('request', req);
  const userId = Math.floor(Math.random() * 5);
  client.get(userId, (err, reply) => {
    if (reply) {
      const userFeed = JSON.parse(reply);
      res.send(200, userFeed);
      queue.create('cacheFeed', {
        userId,
      }).save();
    } else {
      const group = fetchGroup(userId);  
      fetchFeed(userId, group)
        .then((result) => {
          res.send(200, result);
          client.set(userId, JSON.stringify(result));
        });
    }
  });
};
