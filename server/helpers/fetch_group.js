const client = require('../../cache');

module.exports = userId => (
  new Promise((resolve, reject) => {
    let group = null;
    const groupStr = `${userId}Group`;

    client.get(groupStr, (err, reply) => {
      if (reply) {
        group = reply;
        resolve(group);
      } else {
        const num = Math.floor(Math.random() * 2);
        num === 0 ? group = 1 : group = 3;
        client.set(groupStr, group);
        console.log('GROUP in else', group);
        resolve(group);
      }
    });
  })
);
