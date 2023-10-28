const { send, read } = require('./internals');   //OR
// const { send } = require('./internals/request');
// const { read } = require('./internals/response');

function makeRequest(url, data) {
    send(url, data);
    return read();
}

const responseData = makeRequest('https://www.google.com', 'Hello');
console.log(responseData);
