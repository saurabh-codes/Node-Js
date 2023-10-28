// ----------Clean Code of nm2----------
const { send } = require('./request');
const { read } = require('./response');

function makeRequest(url, data) {
    send(url, data);
    return read();
}

const responseData = makeRequest('https://www.google.com', 'Hello');
console.log(responseData);
