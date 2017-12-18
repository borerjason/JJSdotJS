const uniqid = require('uniqid');
const moment = require('moment');

const { client } = require('../index');
const { insertEvent } = require('../seed/seed.js');

const postEvent = e => (
  client.execute(insertEvent, [uniqid(), e.user_id, e.experimentgroup, e.item_id, e.itemtype, e.eventtype, moment().format('L')], { prepare: true }));

module.exports.postEvent = postEvent;
