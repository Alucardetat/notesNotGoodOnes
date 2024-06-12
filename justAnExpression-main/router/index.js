const express = require('express');
const router = express.Router();

// route for home page
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to my App' });
});

module.exports = router;