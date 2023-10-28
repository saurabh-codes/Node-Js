const path = require('path');  
//  /folder/file.jpg (for linux and Mac), \folder\files.jpg (for windows)

function getMessages(req, res) {
    path.join(__dirname, '..', 'public', 'img.jpg')
    res.sendFile(path.join(__dirname, '..', 'public', 'img.jpg'));
    
}

// We are using normal function ( not a arrow function ) because of additional debugging information. 

function postMessages(req, res) {
    console.log('Updating Messages');
}

module.exports = {
    getMessages,
    postMessages,
};