const { postEvent } = require('../../database/models/log_event');
const { likeAdvert } = require('../helpers/post_advert');

module.exports = (req, res) => {
  const eventInfo = req.body.event;
  postEvent(eventInfo)
    .then((response) => {
      console.log('added to database');
    })
    .catch((err) => {
      console.log(err);
    });
  likeAdvert(eventInfo.user_id, eventInfo.item_id)
    .then(() => {
      res.send('post recorded');
    })
    .catch((catchRes) => {
      console.log('catchRes like Advert', catchRes);
      res.send('like could not be recorded');
    });
};
