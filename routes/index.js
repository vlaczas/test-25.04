const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  try {
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
