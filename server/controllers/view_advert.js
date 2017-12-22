const { postEvent } = require('../../database/models/log_event');

module.exports = (req, res) => {
  const eventInfo = req.body.event;
  res.send(200);
  postEvent(eventInfo)
    .then((response) => {
      console.log('added to database');
    })
    .catch((err) => {
      console.log(err);
    });
};
