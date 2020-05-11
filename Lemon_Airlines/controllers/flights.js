const Flight = require('../models/flight');
const Flyer = require('../models/flyer');

const index = (req, res) => {
  Flight.find({}, (err, flights) => {
    res.render('flights/index', { 
      title: 'All Flights', 
      user: req.user,
      flights 
    });
  });
}

// SHOW NEW FLIGHT
const show = (req, res) => {
  Flight.findById(req.params.id)
    .populate('cast').exec((err, flight) => {
      Flyer.find({ _id: {
          $nin: flight.cast
        }
      }, (err, flyers) => {
        res.render('flights/show', {
          title: 'Flight Detail',
          user: req.user,
          flight,
          flyers,
        });
      }
    );
  });
}

// CREATE NEW FLIGHT
const newFlight = (req, res) => {
  res.render('flights/new', {
    title: 'Add Flight',
    user: req.user,
  });
}

// CREATE FLIGHT
const create = (req, res) => {
  const flight = new Flight(req.body);
  flight.save((err) => {
    if (err) return res.redirect('/flights/new');
  
    res.redirect(`/flights/${flight._id}`, 301, {
      user: req.user
    });
  });
}

// EDIT
const editMe = (req, res) => {
  Flight.findById(req.params.id, (err, editFlight) => {
    res.render('flights/edit', {
      flight: editFlight,
      title: 'Edit Me',
      user: req.user
    })
  })
}

// UPDATE
const update = (req, res) => {
  Flight.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  }, () => {
    res.redirect('/flights', 301, {
      user: req.user
    })
  })
}

// DELETE
const delComment = (req, res) => {
  Flight.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/flights', 301, {
      user: req.user,
    });
  });
}


module.exports = {
  index,
  show,
  new: newFlight,
  create,
  editMe,
  update, 
  delComment,
};