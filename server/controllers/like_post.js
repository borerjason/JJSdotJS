const { postEvent } = require('../../database/models/log_event');
const { likePostContent } = require('../helpers/post_content');

module.exports = (req, res) => {
  const eventInfo = req.body;
  postEvent(eventInfo)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  likePostContent(eventInfo)
    .then(() => {
      res.send('post recorded');
    })
    .catch(() => {
      res.send('like could not be recorded');
    });
};
