const { postEvent } = require('../../database/models/log_event')


const logEvent = (req, res) => {
  const eventInfo = req.body;
  postEvent(eventInfo);
  res.end();
};

module.exports.logEvent = logEvent;
