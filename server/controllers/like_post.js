const { postEvent } = require('../../database/models/log_event');
const { likePostContent } = require('../helpers/post_content');

module.exports = (req, res) => {
  const eventInfo = req.body.event;
  res.send(200, 'post recorded');
  postEvent(eventInfo)
    .then((response) => {
      console.log('added to database');
    })
    .catch((err) => {
      console.log(err);
    });
  likePostContent(eventInfo.user_id, eventInfo.item_id)
    .then(() => {
      console.log('posted');
    })
    .catch((catchRes) => {
      console.log('catchRes', catchRes);
    });
};
