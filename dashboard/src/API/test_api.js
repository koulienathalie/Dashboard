const { Client } = require('@elastic/elasticsearch');
const client = new Client({
    node: 'https://192.168.0.19:9200/',
    auth: {
        apiKey: 'tV_IwTMASBuZv-0Bw-p0ag'
    }
});

// API Key should have cluster monitor rights.
const resp = await client.info();

console.log(resp);

// Let's search!
const searchResult = await client.search({
    index: 'index_name',
    q: 'snow'
});

console.log(searchResult.hits.hits)

