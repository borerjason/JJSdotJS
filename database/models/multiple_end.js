const axios = require('axios');
const uniqid = require('uniqid');
const moment = require('moment');

const { client } = require('../../database');
const { insertEvent } = require('../../database/seed/seed');


/*
Multiple endpts

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

const sampleItemObj = {
  user_id:  ,
  experimentgroup: ,
  item_id: , 
  itemtype: ,
  eventtype: ,
}
*/


module.exports = {
  sendPageLikes, sendPostLikes, sendAdvertLikes, sendAdertViews, sendLike,
};
