const { postEvent } = require('../../database/models/log_event');
const { likePostContent } = require('../helpers/post_content');

module.exports = (req, res) => {
  console.log('reqObject: -----', req.body);
  const eventInfo = req.body;
  const postId = req.body.postId;
  const userId = req.body.userId;
  // postEvent(eventInfo)
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  likePostContent(userId, postId)
    .then(() => {
      res.send('post recorded');
    })
    .catch(() => {
      res.send('like could not be recorded');
    });
};
