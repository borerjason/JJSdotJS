const random = require('generate-random-data');
const uniqid = require('uniqid');

const client = require('./index');

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
const controlByWeek = [19, 17, 19, 21, 19, 19, 24, 21, 24, 19, 17, 21];
const dates = ['1/1/2018', '1/8/2017', '1/15/2017', '1/22/2017', '1/29/2017', '2/5/2017', '2/12/2017', '2/19/2017', '2/26/2017', '3/5/2017', '3/12/2017', '3/19/2017'];
const experimentByWeek = [19, 19, 21, 17, 12, 7, 12, 14, 12, 9, 9, 8];
/* eslint-disable */
// People in the 3 group should have fewer events over time than the 1 group
const startDate = new Date('1/1/2017');
const seedControl = (iterations, itemTypes, eventTypes) => {
  const insertEvent = 'INSERT INTO events (id, user_id, experimentgroup, item_id, itemtype, eventtype, timestamp) VALUES (?, ?, ?, ?, ?, ?, ?)';
  // for (let i = 0; i < iterations.length; i += 1) {
    for (let j = 0; j < itemTypes.length; j += 1) {
      for (let k = 0; k < eventTypes.length; k += 1) {
        for (let m = 0; m < 17; m += 1) {
          for (let i = 0; i < 10000; i += 2) {
            if (eventType === 'view' && itemType !== 'advert') {
              continue;
            } else {
              client.client.execute(insertEvent, [uniqid(), i, 1, uniqid(), itemTypes[j], eventTypes[k], '1/8/2017'], { prepare: true }, () => { });
            }
          }
        }
      }
    }
}


const weekOne = () => {
  const insertEvent = 'INSERT INTO events (id, user_id, experimentgroup, item_id, itemtype, eventtype, timestamp) VALUES (?, ?, ?, ?, ?, ?, ?)';
  
  for (let j = 0; j < 19; j += 1) {
    for (let i = 0; i < 10000; i += 2) {
      client.client.execute(insertEvent, [uniqid(), i, 1, uniqid(), itemTypes[0], eventTypes[0], '1/1/2017' ], { prepare: true }, () => {});
    }
  }
};

const makeUser = (userId, experimentGroup) => (
  {
    user_id: userId,
    experimentGroup,
  }
);

module.exports.makeUser = makeUser;
module.exports.populateExperimentTable = populateExperimentTable;
module.exports.weekOne = weekOne;
module.exports.seedControl = seedControl;
