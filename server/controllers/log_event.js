const { postEvent } = require('../../database/models/log_event');

const logEvent = (req, res) => {
  const eventInfo = req.body;
  postEvent(eventInfo)
    .then((response) => {
      console.log(response);
      res.end();
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.logEvent = logEvent;
