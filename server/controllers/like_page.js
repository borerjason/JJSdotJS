const { postEvent } = require('../../database/models/log_event');
const { likePageContent } = require('../helpers/post_content');

module.exports = (req, res) => {
  const eventInfo = req.body.event;
  res.send(200, 'page like recorded');
  postEvent(eventInfo)
    .then((response) => {
      console.log('added to database');
    })
    .catch((err) => {
      console.log(err);
    });
  likePageContent(eventInfo.user_id, eventInfo.item_id)
    .then(() => {
      console.log('page like recorded');
    })
    .catch(() => {
      console.log('like could not be recorded');
    });
};
