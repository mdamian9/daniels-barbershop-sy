const express = require('express');
const router = express.Router();

router.get('/messages', (req, res) => {
    res.send('GET /messages');
});

module.exports = router;
