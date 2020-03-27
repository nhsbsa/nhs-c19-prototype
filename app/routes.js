// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

router.post('/email', function (req, res) {
    res.redirect('check-your-email');
})

router.post('/sign-in', function (req, res) {
    res.redirect('messages');
})

// This moves routing to another directory
router.use('/2/', require('./views/2/_routes'))
router.use('/3/', require('./views/3/_routes'))
router.use('/4/', require('./views/4/_routes'))
router.use('/5/', require('./views/5/_routes'))
module.exports = router;
