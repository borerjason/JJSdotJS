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
  console.log('function called');
  let experiment = false;
  for (let i = 0; i < 10; i++) {
    let experimentGroup = experiment ? experimentGroups.experiment : experimentGroups.control; 
    let user = makeUser(i, experimentGroup)
    experiment = !experiment;
    test.push(user);
  }
}


module.exports.populateExperimentTable = populateExperimentTable;
