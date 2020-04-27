const router = require('express').Router();

const reviewCTRL = require('../controllers/reviews');

router.post('/flights/:id/reviews', reviewCTRL.create);

module.exports = router;