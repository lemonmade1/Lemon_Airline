const Flyer = require('../models/flyer');
const Flight = require('../models/flight');

const create = (req, res) => {
  const s = req.body.departs;
  req.body.departs = `${s.substr(5,2)}-${s.substr(8,2)}-${s.substr(0,4)}`;

  Flyer.create(req.body, (err, flyer) => {
    res.redirect('flyers/new', 301, {
      user: req.user,
    })
  });
}

const newFlyer = (req, res) => {
  Flyer.find({}, (err, flyers) => {
    res.render('flyers/new', {
      title: 'Add Flyer',
      flyers,
      user: req.user,
    });
  })
}

const addToCast = (req, res) => {
  Flight.findById(req.params.id, (err, flight) => {
    flight.cast.push(req.body.flyerId);
     flight.save((err) => {
       res.redirect(301, `/flights/${flight._id}`);
     });
  })
}

module.exports = {
  create,
  new: newFlyer,
  addToCast
};