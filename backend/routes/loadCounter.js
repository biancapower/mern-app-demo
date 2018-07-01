const express = require('express');
const router = express.Router();
const LoadCounter = require('../models/loadCounter');

router.get('/loadCounter',
  (req, res) => {
    LoadCounter.findOne().then((loadCounter) => {
      if (!loadCounter) {
        loadCounter = new LoadCounter();
        loadCounter.count = 0;
      }
      loadCounter.count++;
      loadCounter.save().then(() => {
        res.json(loadCounter.count);
      });
    });
    // FIXME: add a catch
  }
);


module.exports = router;
