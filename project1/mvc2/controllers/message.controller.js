function getMessages(req, res) {
    res.send('<ul><li>Hello Albert!</li></ul>');
}

// We are using normal function ( not a arrow function ) because of additional debugging information. 

function postMessages(req, res) {
    console.log('Updating Messages');
}

module.exports = {
    getMessages,
    postMessages,
};