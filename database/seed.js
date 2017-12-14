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
/* eslint-disable */
// People in the 3 group should have fewer events over time than the 1 group
const weekOne = () => {
  const insertEvent = 'INSERT INTO events (id, user_id, experimentgroup, item_id, itemtype, eventtype, timestamp) VALUES (?, ?, ?, ?, ?, ?, ?)';
  
  for (let j = 0; j < 19; j += 1) {
    for (let i = 0; i < 10000; i += 2) {
      client.client.execute(insertEvent, [uniqid(), i, 1, random.int(1, 1000000000000), itemTypes[0], eventTypes[0], '1/1/2017' ])
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
