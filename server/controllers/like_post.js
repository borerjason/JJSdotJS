const { postEvent } = require('../../database/models/log_event');
const { likePostContent } = require('../helpers/post_content');

module.exports = (req, res) => {
  const eventInfo = req.body.event;
  postEvent(eventInfo)
    .then((response) => {
      console.log('added to database');
    })
    .catch((err) => {
      console.log(err);
    });
  likePostContent(eventInfo.user_id, eventInfo.item_id)
    .then(() => {
      res.send('post recorded');
    })
    .catch((catchRes) => {
      console.log('catchRes', catchRes);
      res.send('like could not be recorded');
    });
};
