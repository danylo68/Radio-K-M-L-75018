const express = require('express');
const router = express.Router();
const tracksCtrl = require( '../controllers/track.controller.js' );

router.get('/', tracksCtrl.callLastFm);

module.exports = router; 