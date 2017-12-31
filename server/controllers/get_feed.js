const client = require('../../cache');
const queue = require('../../workers');
require('dotenv').config();

const fetchFeed = require('../helpers/fetch_feed');
const fetchGroup = require('../helpers/fetch_group')

/*  ----- kue for job---
const queue = kue.createQueue();


function storeFeed(obj) {
  const group = fetchGroup(userId);
  fetchFeed(obj.userId, group)
  .then((result) => {
    client.set(userId, JSON.stringify(result));
  });
}
*/

require('../../dummy_data/mocks');

module.exports = (req, res) => {
  const userId = Math.floor(Math.random() * 5);
  
  client.get(userId, (err, reply) => {
    // if feed is cached send current cached feed back to client
    if (reply) {
      const userFeed = JSON.parse(reply);
      res.send(200, userFeed);
      // add this function to kue
      // in order to update add this part of the function to a queue
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


