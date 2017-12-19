const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

// ------ mock for service testing -------
const faker = require('faker');

const mock = new MockAdapter(axios, { delayResponse: 25 });
mock
  .onPut('/posts/0/likes').reply(200, {
    postId: faker.random.number(),
    postContent: faker.hacker.phrase(),
    postOwnerId: faker.random.number(),
    postOwnerName: faker.name.findName(),
    postOwnerType: faker.random.word(),
    postLikeCount: faker.random.number(),
  })
  .onPost('/pages/0/likes').reply(200, { id: faker.random.number() });

// ---------------------------------------

const likePostContent = (userId, postId) => (
  axios.put(`/posts/${postId}/likes`, { userId }));

const likePageContent = (userId, postId) => {
  axios.post(`/pages/${postId}/likes`, { userId }) 
};

module.exports = { likePostContent, likePageContent };
