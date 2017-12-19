const faker = require('faker');

const postLike = {
  user_id: 0,
  experimentgroup: 3,
  item_id: 0,
  itemtype: 'Post',
  eventtype: 'Like',
};

const pageLike = {
  user_id: 0,
  experimentgroup: 3,
  item_id: 0,
  itemtype: 'Page',
  eventtype: 'Like',
};

const advertLike = {
  user_id: 0,
  experimentgroup: 3,
  item_id: 0,
  itemtype: 'Advert',
  eventtype: 'Like',
};

const advertClick = {
  user_id: 0,
  experimentgroup: 3,
  item_id: 0,
  itemtype: 'Advert',
  eventtype: 'Click',
};

const advertView = {
  user_id: 0,
  experimentgroup: 3,
  item_id: 0,
  itemtype: 'Advert',
  eventtype: 'View',
};

module.exports = {
  postLike, pageLike, advertLike, advertClick, advertView,
};
