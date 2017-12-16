const axios = require('axios');
const uniqid = require('uniqid');

const { client } = require('../../database');
const { insertEvent } = require('../../database/seed/seed');

// (id, user_id, experimentgroup, item_id, itemtype, eventtype, timestamp)

const sendPageLikes = (pageId, userId) => {
  // insert into cassandra
  // need to collect experimentalgroup and timestamp from somewhere
  client.execute(insertEvent, [uniqid(), userId, experimentalgroup, pageId, 'page', 'like', timestamp] );

  // insert into event lot

  // POST page like information to content service
  axios.post(`/pages/${pageId}/likes`, { userId });
};

