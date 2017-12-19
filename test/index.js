/* eslint-disable */
const axios = require('axios');
const test = require('tape');

const dummyEvents = require('../dummy_data/events')

test('axios put request to post content test service return "post recorded" ', function(t) {
  axios.put(`http://localhost:8080/events/posts/likes`, { event: dummyEvents.postLike})
    .then((response) => {
      t.equal(response.data, 'post recorded');
    })
    .catch((err) => {
      console.log(err);
    })
    t.end();
})

test('axios post request to page content test service return "post recorded" ', function (t) {
  axios.put(`http://localhost:8080/events/posts/likes`, { event: dummyEvents.pageLike })
    .then((response) => {
      t.equal(response.data, 'post recorded');
    })
    .catch((err) => {
      console.log(err);
    })
  t.end();
})

/* eslint-enable */
