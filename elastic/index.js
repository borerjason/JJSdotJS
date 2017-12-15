const elasticsearch = require('elasticsearch');

const elasticClient = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'info',
});

const indexName = 'events';

// delete an existing index
function deleteIndex() {
  return elasticClient.indices.delete({
    index: indexName,
  });
}
exports.deleteIndex = deleteIndex;

// create the index
function initIndex() {
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
  return elasticClient.indices.putMapping({
    index: indexName,
    type: 'document',
    body: {
      properties: {
        id: { type: 'string' },
        user_id: { type: 'integer' },
        experimentgroup: { type: 'integer' },
        item_id: { type: 'string' },
        itemtype: { type: 'string' },
        eventtype: { type: 'string' },
        timestamp: { type: 'date' },
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
