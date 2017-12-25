const { postEvent } = require('../../database/models/log_event');
const { likeAdvert } = require('../helpers/post_advert');

module.exports = (req, res) => {
  const eventInfo = req.body.event;
  res.send('post recorded');
  postEvent(eventInfo)
    .then((response) => {
      console.log('added to database');
    })
    .catch((err) => {
      console.log(err);
    });
  likeAdvert(eventInfo.user_id, eventInfo.item_id)
    .then(() => {
      console.log('sent to advert service');
    })
    .catch((catchRes) => {
      console.log('err to Advert service', catchRes);
    });
};
