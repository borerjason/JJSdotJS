const axios = require('axios');
const redis = require('redis');
require('dotenv').config();

const prepareFeed = require('../helpers/prepare_feed');

// process.env.RED_PORT, process.env.RED_HOST)
const client = redis.createClient();

client.on('connect', function (res, err) {
  console.log('connected to redis');
});

require('../../dummy_data/mocks');



const feed = (req, res) => {
  console.log('Triggered!');
/*
   - check to see if key is stored in red cache
      - if yes serve back to client
      - if no prepare new feed
       - send feed to client
       - add to red cache
*/
  const userId = 0;
  // if doesn't have it reply === null

  client.get('userId', (err, reply) => {
    console.log('Redis Get Request', JSON.parse(reply));
  });
  // check if they are in experimental group
  // serve feed/home page to the user
  const contentFeed = axios.get(`/users/${userId}/feed`);
  const adverts = axios.get(`/adverts?userId=${userId}`);
  
  Promise.all([contentFeed, adverts])
    .then((response) => {
      console.log('promises resolved');
      const feedFinal = prepareFeed(3, response[0].data.feed, response[1].data.adverts);
      client.set('userId', JSON.stringify(feedFinal));
      res.send(feedFinal);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.feed = feed;
