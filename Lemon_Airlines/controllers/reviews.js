const Flight = require('../models/flight');

const create = (req, res) => {
  Flight.findById(req.params.id, (err, flight) => {
    flight.reviews.push(req.body);
    flight.save((err) => {
      res.redirect(`/flights/${flight._id}`, 301);
    });
  });
}

module.exports = {
  create
};