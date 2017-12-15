/* eslint-disable */
const elasticsearch = require('elasticsearch');

const elasticClient = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'info',
});

const indexName = 'events';

// deleteIndex()
//   .then((res) => {
//     console.log('del worked');
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// initIndex()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// initMapping()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
const sample = {
  id: "test",
  user_id: 1,
  experimentgroup: 3,
  item_id: "testing",
  itemtype: "page",
  eventtype: "click",
  timestamp: 1/1/2017,
};

addDocument(sample).then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// delete an existing index
function deleteIndex() {
  console.log('DELETE');
  return elasticClient.indices.delete({
    index: indexName,
  });
}
exports.deleteIndex = deleteIndex;

// create the index
function initIndex() {
  console.log('INIT');
  return elasticClient.indices.create({
    index: indexName,
  });
}
exports.initIndex = initIndex;

// check if the index exists

function indexExists() {
  return elasticClient.indices.exists({
    index: indexName,
  });
}
exports.indexExists = indexExists;

function initMapping() {
  console.log('MAPPING');
  return elasticClient.indices.putMapping({
    index: indexName,
    type: "document",
    body: {
      properties: {
        id: { type: "text" },
        user_id: { type: "integer" },
        experimentgroup: { type: "integer" },
        item_id: { type: "text" },
        itemtype: { type: "text" },
        eventtype: { type: "text" },
        timestamp: { type: "date" }
      },
    },
  });
}
exports.initMapping = initMapping;

function addDocument(document) {
  return elasticClient.index({
    index: indexName,
    type: 'document',
    body: {
      id: document.id,
      user_id: document.user_id,
      experimentgroup: document.experimentgroup,
      item_id: document.item_id,
      itemtype: document.itemtype,
      eventtype: document.eventtype,
      timestamp: document.timestamp,
    },
  });
}
exports.addDocument = addDocument;
