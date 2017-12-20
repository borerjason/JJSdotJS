const elastic = require('../../elastic');
const { controlDate, experimentDate } = require('./helpers');

const experimentGroups = {
  control: 1,
  experiment: 3,
};

const itemTypes = ['page', 'post', 'advert'];
const eventTypes = ['click', 'like', 'view'];

let count = 0;
let item = 0;
let max = 200;

const insertEvent = 'INSERT INTO events (id, user_id, experimentgroup, item_id, itemtype, eventtype, timestamp) VALUES (?, ?, ?, ?, ?, ?, ?)';

const seedEvents = (date, itemNum, startNum, maxNum, group) => {
  // const arr = [];
  let i = startNum;
  for (; i < max; i += 2) {
    elastic.index({id: uniqid(), user_id: i, experimentalgroup: group, item_id: uniqid(), itemtype: itemTypes[item], eventtype: eventTypes[item], timestamp: date });
  }

  client.client.batch(arr, { prepare: true }).then(() => {
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
