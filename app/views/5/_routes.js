// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

router.post('/region', function (req, res) {
    res.redirect('messages');
})

router.post('/sector', function (req, res) {
    res.redirect('messages');
})

module.exports = router;
