const axios = require('axios');
const uniqid = require('uniqid');
const moment = require('moment');

const { client } = require('../../database');
const { insertEvent } = require('../../database/seed/seed');

// (id, user_id, experimentgroup, item_id, itemtype, eventtype, timestamp)

const sendPageLikes = (pageId, userId) => {
  // insert into cassandra
  // need to collect experimentalgroup
  client.execute(insertEvent, [uniqid(), userId, 3, pageId, 'page', 'like', moment().format('L')], { prepare: true })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  // insert into event log

  // POST page like information to content service
  axios.post(`/pages/${pageId}/likes`, { userId });
};
sendPageLikes('pageId', 3);
module.exports.sendPageLikes = sendPageLikes;
