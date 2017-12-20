const axios = require('axios');
// const MockAdapter = require('axios-mock-adapter');
require('../../dummy_data/mocks');

const prepareFeed = require('../helpers/prepare_feed');

// ------ mock for service testing -------

// const mock = new MockAdapter(axios, { delayResponse: 25 });
// mock
//   .onGet('/users/0/feed').reply(200, { feed: dummy.feed })
//   .onGet('/adverts?userId=0').reply(200, { adverts: dummy.adverts });

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
