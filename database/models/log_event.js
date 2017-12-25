const rn = require('random-number');

const gen = rn.generator({
  min: 0,
  max: 10000,
  integer: true,
});

const moment = require('moment');

const { client } = require('../index');
const { insertEvent } = require('../seed/seed.js');
const time = moment().format('L');

const postEvent = e => (
  // for testing
  client.execute(insertEvent, [gen(), gen(), e.experimentgroup, gen(), e.itemtype, e.eventtype, time], { prepare: true }));
  // client.execute(insertEvent, [gen(), e.user_id, e.experimentgroup, e.item_id, e.itemtype, e.eventtype, time], { prepare: true }));

module.exports.postEvent = postEvent;
