const kue = require('kue');
const cacheFeed = require('./cache_feed.js');

const queue = kue.createQueue({ jobEvents: false });

queue.process('cacheFeed', (job, done) => {
  cacheFeed(job.data.userId, done);
});

module.exports = queue;
