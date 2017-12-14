const uniqid = require('uniqid');

const client = require('../index');
const { controlDate, experimentDate } = require('./helpers');

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
let start = 0;
let max = 500;
const insertEvent = 'INSERT INTO events (id, user_id, experimentgroup, item_id, itemtype, eventtype, timestamp) VALUES (?, ?, ?, ?, ?, ?, ?)';

const controlGroup = (date, itemNum, startNum, maxNum) => {
  const arr = [];
  for (; start < max; start += 2) {
    arr.push({ query: insertEvent, params: [uniqid(), start, 1, uniqid(), itemTypes[item], eventTypes[item], date] });
  }

  client.client.batch(arr, { prepare: true }).then((success) => {
    count += arr.length;
    if (itemNum === 0) {
      item = 1;
    } else if ( item === 1 ) {
      item = 2;
    } else {
      item = 0;
    }

    if (maxNum === 10000) {
      max = 500;
      start = 0;
    } else {
      max += 500;
    }
    const week = controlDate(count);

    if (count < 5993907) {
      controlGroup(week, item, start, max);
    }
    console.log(count);
  });
};

controlGroup('1/1/2018', item, start, max);
