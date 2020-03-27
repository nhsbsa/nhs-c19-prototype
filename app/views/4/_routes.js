// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

router.post('/push', function (req, res) {
    var push = req.session.data['push'];
    console.log(push)
    if (push === 'yes') {
        res.redirect('preferences');
    } else {
        res.redirect('/messages');
    }
})

router.post('/preferences', function (req, res) {
    var preferences = req.session.data['preferences'];
    console.log(preferences)
    if (preferences.includes('text message')) {
        res.redirect('mobile-number');
    } else {
        res.redirect('check');
    }
})

router.post('/mobile-number', function (req, res) {
    res.redirect('check');
})

module.exports = router;
