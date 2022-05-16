const router = require('express').Router();

router.use((req, res) => {
    res.status(404).send('<h1>Error 404: There is nothing here!</h1>');
  });

module.exports = router;