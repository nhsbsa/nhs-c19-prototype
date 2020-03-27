// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line


router.post('/code', function (req, res) {
    res.redirect('/messages');
})


router.post('/email', function (req, res) {
    res.redirect('check-your-email');
})

module.exports = router;
