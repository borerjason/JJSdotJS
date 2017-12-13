const client = require('./index');

/* eslint-disable */
// event table
// const event = {
//   user_id: ,
//   experimentGroup: ,
//   item_id: ,
//   category: ,
//   timestamp: ,
// }

const experimentGroups = {
  control: 1,
  experiment: 3, 
}

const categories = ['art', 'sports', 'politics', 'cattle', 'fashion', 'cars', 'finance'];


// experiment table
// insert 10,000 unique users

const makeUser = (userId, experimentGroup) => (
  { 
    user_id: userId,
    experimentGroup: experimentGroup,
  }
);


const populateExperimentTable = () => {

  const insertUser = 'INSERT INTO experiment (user_id, experimentgroup) VALUES (?, ?)'
  let experiment = false;

  for (let i = 0; i < 10000; i++) {
    let experimentGroup = experiment ? experimentGroups.experiment : experimentGroups.control; 
    experiment = !experiment;
    client.client.execute(insertUser, [i, experimentGroup], {prepare: true}, (result) => {})
  }
}

module.exports.populateExperimentTable = populateExperimentTable;
