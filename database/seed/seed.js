const uniqid = require('uniqid');

const client = require('../index');
const { controlDate, experimentDate } = require('./helpers');
const elastic = require('../../elastic/index');

const experimentGroups = {
  control: 1,
  experiment: 3,
};

const populateExperimentTable = () => {
  const insertUser = 'INSERT INTO experiment (user_id, experimentgroup) VALUES (?, ?)';
  let experiment = false;

  for (let i = 0; i < 10000; i += 1) {
    const experimentGroup = experiment ? experimentGroups.experiment : experimentGroups.control;
    experiment = !experiment;
    client.client.execute(insertUser, [i, experimentGroup], { prepare: true }, () => {});
  }
};

const itemTypes = ['page', 'post', 'advert'];
const eventTypes = ['click', 'like', 'view'];

let count = 0;
let item = 0;
let max = 200;

const insertEvent = 'INSERT INTO events (id, user_id, experimentgroup, item_id, itemtype, eventtype, timestamp) VALUES (?, ?, ?, ?, ?, ?, ?)';

const seedEvents = (date, itemNum, startNum, maxNum, group) => {
  const arr = [];
  let i = startNum;
  for (; i < max; i += 2) {
    arr.push({ query: insertEvent, params: [uniqid(), i, group, uniqid(), itemTypes[item], eventTypes[item], date] });
  }
  client.client.batch(arr, { prepare: true }).then((response) => {
    console.log(response);
    count += arr.length;
    if (itemNum === 0) {
      item = 1;
    } else if (item === 1) {
      item = 2;
    } else {
      item = 0;
    }

    if (group === experimentGroups.control) {
      const week = controlDate(count);

      if (maxNum === 10000) {
        max = 200;
        i = 0;
      } else {
        max += 200;
      }

      if (count < 5993907) {
        seedEvents(week, item, i, max, experimentGroups.control);
      } else {
        count = 0;
      }
      console.log(count);
    }

    if (group === experimentGroups.experiment) {
      if (maxNum === 10000) {
        max = 200;
        i = 1;
      } else {
        max += 200;
      }

      const week = experimentDate(count);
      if (count < 4006693) {
        seedEvents(week, item, i, max, experimentGroups.experiment);
      } else {
        count = 0;
      }
      console.log(count);
    }
  });
};

// Uncomment and run file to seed database
seedEvents('01/01/2017', item, 0, max, experimentGroups.control);
// seedEvents('01/01/2017', item, 1, max, experimentGroups.experiment);

module.exports.insertEvent = insertEvent;
