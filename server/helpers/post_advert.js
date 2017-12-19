// const MockAdapter = require('axios-mock-adapter');
// const axios = require('axios');

// // ------ mock for service testing -------


// const mock = new MockAdapter(axios, { delayResponse: 25 });
// mock
//   .onPost('/adverts/0/likes').reply(200)
//   .onPost('/adverts/0/click').reply(200);

// // ---------------------------------------

// const likeAdvert = (userId, advertId) => (
//   axios.post(`/adverts/${advertId}/likes`, { userId }));

// const clickAdvert = (userId, advertId) => (
//   axios.post(`/adverts/${advertId}/click`, { userId }));

// module.exports = { likeAdvert, clickAdvert };
