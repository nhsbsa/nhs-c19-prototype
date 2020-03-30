// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

router.post('/details', function (req, res) {
    res.redirect('check-your-email');
})

router.get('/bypass', function (req, res) {
    res.redirect('check-your-email');
})

module.exports = router;
