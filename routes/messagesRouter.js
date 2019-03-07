const express = require('express');
const router = express.Router();
const db_Messages = require('../models/message');

router.get('/messages', (req, res) => {
    db_Messages.find().then(messages => {
        res.send(messages);
    });
});

router.post('/messages', (req, res) => {
    const newMessage = req.body;
    db_Messages.create(newMessage).then(message => {
        res.send(`Created message: ${message}`)
    });
});

router.put('messages', (req, res) => {
    res.statusCode = 403;
    res.send('PUT operation not supported on /messages');
});

router.delete('messages', (req, res) => {
    db_Messages.findOneAndDelete({
        userEmail: req.body.userEmail,
        subject: req.body.subject
    }).then(message => {
        res.send(`Deleted message: ${message}`);
    });
});

module.exports = router;
