/* eslint-disable */
const axios = require('axios');

const test = require('tape');

test('timing test', function(t) {
  // t.plan(2);
  t.equal(typeof Date.now, 'function');

  t.end();
});

test('axios post to post-content return "post recorded" ', function(t) {
  axios.put(`http://localhost:8080/events/posts/likes`, { postId: 0, userId: 3 })
    .then((response) => {
      t.equal(response.data, 'post recorded');
    })
    .catch((err) => {
      console.log(err);
    })
    t.end();
})

/* eslint-enable */
