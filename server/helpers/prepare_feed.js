
module.exports = (experimentalGroup, content, adverts) => {
  const feedFinal = [];
  let k = 0;
  if (experimentalGroup === '1') {
    for (let i = 0; i < content.length; i += 1) {
      feedFinal.push(content[i]);
      if ((i + 1) % 5 === 0) {
        feedFinal.push(adverts[k]);
        k += 1;
      }
    }
  }
  if (experimentalGroup === '3') {
    for (let i = 0; i < content.length; i += 1) {
      feedFinal.push(content[i]);
      if ((i + 1) % 3 === 0) {
        feedFinal.push(adverts[k]);
        k += 1;
      }
    }
  }
  return feedFinal;
};
