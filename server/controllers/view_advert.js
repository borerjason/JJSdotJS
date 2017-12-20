const { postEvent } = require('../../database/models/log_event');

module.exports = (req, res) => {
  const eventInfo = req.body.event;
  postEvent(eventInfo)
    .then((response) => {
      console.log('added to database');
    })
    .catch((err) => {
      console.log(err);
    });
  res.end();
};
