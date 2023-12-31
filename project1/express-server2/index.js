const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
    {
        id: 1,
        name: 'Sir Isaac Newton'
    },
    {
        id: 2,
        name: 'Albert Einstein'
    }
];

app.get('/friends', (req, res) => {
    res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: "Friend does not exist"
        });
    }
});

app.get('/messages', (req, res) => {
    res.send('<ul><li>Hello Albert!</li></ul>');
});

app.post('/messages', (req, res) => {
    console.log('Updating Messages');
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
});