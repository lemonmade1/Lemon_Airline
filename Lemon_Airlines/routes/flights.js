const router = require('express').Router();
const flightCTRL = require('../controllers/flights');

router.get('/', flightCTRL.index);

router.get('/new', flightCTRL.new);

router.get('/:id', flightCTRL.show);

router.post('/', flightCTRL.create);

router.get('/:id/edit', flightCTRL.editMe)

router.put('/:id', flightCTRL.update)

router.delete("/:id", flightCTRL.delComment);


module.exports = router;
