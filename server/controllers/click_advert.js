const { postEvent } = require('../../database/models/log_event');
const { clickAdvert } = require('../helpers/post_advert');

module.exports = (req, res) => {
  const eventInfo = req.body.event;
  postEvent(eventInfo)
    .then((response) => {
      console.log('added to database');
    })
    .catch((err) => {
      console.log(err);
    });
  clickAdvert(eventInfo.user_id, eventInfo.item_id)
    .then(() => {
      res.send('click recorded');
    })
    .catch((catchRes) => {
      console.log('catchRes click advert', catchRes);
      res.send('like could not be recorded');
    });
};
