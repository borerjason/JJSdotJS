const axios = require('axios');
// ---------- require mocks for local testing -----------
require('../../dummy_data/mocks');
// ------------------------------------------------------

const likeAdvert = (userId, advertId) => (
  axios.post(`/adverts/${advertId}/likes`, { userId }));

const clickAdvert = (userId, advertId) => (
  axios.post(`/adverts/${advertId}/click`, { userId }));

module.exports = { likeAdvert, clickAdvert };
