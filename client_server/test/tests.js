/* eslint-disable */

const test = require('tape');

test('timing test', function(t) {
  // t.plan(2);
  t.equal(typeof Date.now, 'function');
  

  // const start = Date.now();

  // setTimeout(function () {
  //   t.equal(Date.now() - start, 100);
  // }, 100);

  t.end();
});

/* eslint-enable */
