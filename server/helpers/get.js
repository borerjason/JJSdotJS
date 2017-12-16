const axios = require('axios');

const getFeed = (userId) => {
  return axios.get(`/users/${userId}/feed`);
};

const getAdverts = (userId) => {
  return axios.get(`/adverts?userId=${userId}`);
};

module.exports = {
  getFeed, getAdverts
};
