const axios = require('axios');
const prepareFeed = require('./prepare_feed');

module.exports = (userId, group) => (
  new Promise((resolve, reject) => {
    const contentFeed = axios.get(`/users/${userId}/feed`);
    const adverts = axios.get(`/adverts?userId=${userId}`);

    Promise.all([contentFeed, adverts])
      .then((response) => {
        resolve(prepareFeed(group, response[0].data.feed, response[1].data.adverts));
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  })
);
