const { postEvent } = require('../../database/models/log_event');
const { clickAdvert } = require('../helpers/post_advert');

module.exports = (req, res) => {
  const eventInfo = req.body.event;
  res.send('click recorded');
  postEvent(eventInfo)
    .then((response) => {
      console.log('added to database');
    })
    .catch((err) => {
      console.log(err);
    });
  clickAdvert(eventInfo.user_id, eventInfo.item_id)
    .then(() => {
      console.log('advert click');
    })
    .catch((catchRes) => {
      console.log('catchRes click advert', catchRes);
    });
};
