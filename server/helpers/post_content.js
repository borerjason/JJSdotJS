const axios = require('axios');

const likePostContent = eventInfo => (
  axios.put(`/posts/${postId}/likes`, { userId }));

const likePageContent = (eventInfo) => {
  axios.post(`/pages/${postId}/likes`, { userId }) 
};

module.exports = { likePostContent, likePageContent };
