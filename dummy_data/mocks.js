const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const faker = require('faker');

const dummy = require('../dummy_data');

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
  .onPost('/pages/0/likes').reply(200, { id: faker.random.number() })
  .onPost('/adverts/0/likes').reply(200)
  .onPost('/adverts/0/click').reply(200)
  .onGet('/users/0/feed').reply(200, { feed: dummy.feed })
  .onGet('/adverts?userId=0').reply(200, { adverts: dummy.adverts });

