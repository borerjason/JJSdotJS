const client = require('../cache');
const fetchGroup = require('../server/helpers/fetch_group');
const fetchFeed = require('../server/helpers/fetch_feed');

module.exports = (userId, done) => {
  fetchGroup(userId)
    .then((group) => {
      fetchFeed(userId, group)
        .then((result) => {
          client.set(userId, JSON.stringify(result));
        });
      done();
    });
};
