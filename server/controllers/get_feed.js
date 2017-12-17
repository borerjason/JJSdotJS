const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const dummy = require('../../dummy_data');
const prepareFeed = require('../helpers/prepare_feed');

// ------ mock for service testing -------

const mock = new MockAdapter(axios, { delayResponse: 25 });
mock
  .onGet('/users/0/feed').reply(200, { feed: dummy.feed })
  .onGet('/adverts?userId=0').reply(200, { adverts: dummy.adverts });

// ---------------------------------------

const feed = (req, res) => {
  console.log('Triggered!');
  // check if they are in experimental group
  // serve feed/home page to the user
  // const userId = body.userID;
  const userId = 0;
  const contentFeed = axios.get(`/users/${userId}/feed`);
  const adverts = axios.get(`/adverts?userId=${userId}`);

  Promise.all([contentFeed, adverts])
    .then((response) => {
      console.log('promises resolved');
      const feedFinal = prepareFeed(3, response[0].data.feed, response[1].data.adverts);
      res.send(feedFinal);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.feed = feed;

// helper functions if want to modularize later
/*

const prepareFeed = (experimentalgroup) => {
  // get feed
  const feed = getFeed();
  // get adverts
  const adverts = getAdverts();
  // when feed and adverts arrive check which experiment group user is in and create new array with appropriate mix
  Promise.all([feed, adverts])
    .then() 

}
*/
