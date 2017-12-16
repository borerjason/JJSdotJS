const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const dummy = require('../../dummy_data');

// ------ mock for service testing -------
console.log('DUMMY', dummy);
const mock = new MockAdapter(axios, { delayResponse: 1000 });
mock
  .onGet('/users/0/feed').reply(200, { feed: dummy.feed })
  .onGet('/adverts?userId=0').reply(200, { adverts: dummy.adverts });

// ---------------------------------------

const feed = ({ body }, res) => {
  // check if they are in experimental group
  // serve feed/home page to the user
  const userId = body.userID;
  const contentFeed = axios.get(`/users/${userId}/feed`);
  const adverts = axios.get(`/adverts?userId=${userId}`);

  Promise.all([contentFeed, adverts])
    .then((response) => {
      console.log(response);
      res.send('got your results!');
    })
    .catch((err) => {
      console.log(err);
    });
 
};

module.exports.feed = feed;

// helper functions if want to modularize later
/*
const getFeed = (userId) => {
  return axios.get(`/users/${userId}/feed`);
};

const getAdverts = (userId) => {
  return axios.get(`/adverts?userId=${userId}`);
};

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
