const router = require('express').Router();

const flyerCTRL = require('../controllers/flyers');

router.get('/flyers/new', flyerCTRL.new);
router.post('/flyers', flyerCTRL.create);
router.post('/flights/:id/flyers', flyerCTRL.addToCast);

module.exports = router;