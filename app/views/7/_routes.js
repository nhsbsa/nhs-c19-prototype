// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line
router.get('/survey', function (req, res) {
    res.redirect('job');
})

router.post('/job', function (req, res) {
    res.redirect('region');
})

router.post('/region', function (req, res) {
    res.redirect('help');
})

router.post('/help', function (req, res) {
    res.redirect('done');
})

module.exports = router;
