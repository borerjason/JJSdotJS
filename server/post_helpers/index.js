const axios = require('axios');
const uniqid = require('uniqid');
const moment = require('moment');

const { client } = require('../../database');
const { insertEvent } = require('../../database/seed/seed');

// (id, user_id, experimentgroup, item_id, itemtype, eventtype, timestamp)

const sendPageLikes = (userId, pageId) => {
  // insert into cassandra
  // need to collect experimentalgroup
  client.execute(insertEvent, [uniqid(), userId, 3, pageId, 'page', 'like', moment().format('L')], { prepare: true })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  // POST page like information to content service
  axios.post(`/pages/${pageId}/likes`, { userId });
};

const sendPostLikes = (userId, postId) => {

};

const sendAdvertLikes = (userId, advertId) => {

};

const sendAdertViews = (userId, advertId) => {

};
/*
const sampleItemObj = {
  user_id:  ,
  experimentgroup: ,
  item_id: , 
  itemtype: ,
  eventtype: ,
}
*/

const sendLike = (e) => {
  client.execute(insertEvent, [uniqid(), e.user_id, e.experimentgroup, e.item_id, e.itemtype, e.eventtype, moment().format('L')], { prepare: true })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  if (e.itemtype === 'page') {
    axios.post(`/pages/${e.pageId}/likes`, { userId: e.user_id });

  } else if (e.itemtype === 'post') {
    axios.put(`/posts/${e.postId}/likes`, { userId: e.user_id });

  } else if (e.itemtype === 'advert' && e.eventtype === 'like') {
    axios.post(`/adverts/${e.advertId}/likes`, { userId: e.user_id });
    
};

module.exports = {
  sendPageLikes, sendPostLikes, sendAdvertLikes, sendAdertViews, sendLike,
};
