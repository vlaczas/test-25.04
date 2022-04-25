const express = require('express');
const { getPicture } = require('../controllers/index.controller');

const router = express.Router();

/* GET home page. */
router.get('/', getPicture);

module.exports = router;
