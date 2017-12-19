const { postEvent } = require('../../database/models/log_event');
const { likePageContent } = require('../helpers/post_content');

module.exports = (req, res) => {
  const eventInfo = req.body.event;
  postEvent(eventInfo)
    .then((response) => {
      console.log('added to database');
    })
    .catch((err) => {
      console.log(err);
    });
  likePageContent(eventInfo.user_id, eventInfo.item_id)
    .then(() => {
      res.send('page like recorded');
    })
    .catch(() => {
      res.send('like could not be recorded');
    });
};
