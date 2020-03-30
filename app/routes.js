// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line


// This moves routing to another directory
router.use('/1/', require('./views/1/_routes'))
router.use('/2/', require('./views/2/_routes'))
router.use('/3/', require('./views/3/_routes'))
router.use('/4/', require('./views/4/_routes'))
router.use('/5/', require('./views/5/_routes'))
router.use('/6/', require('./views/6/_routes'))
router.use('/7/', require('./views/7/_routes'))

module.exports = router;
