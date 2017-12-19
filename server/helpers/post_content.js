const axios = require('axios');

// ---------- require mocks for local testing -----------
require('../../dummy_data/mocks');
// ------------------------------------------------------

const likePostContent = (userId, postId) => (
  axios.put(`/posts/${postId}/likes`, { userId }));

const likePageContent = (userId, postId) => (
  axios.post(`/pages/${postId}/likes`, { userId }));

module.exports = { likePostContent, likePageContent };
