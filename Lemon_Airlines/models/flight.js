const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const performerSchema = require('./flyer');

const reviewSchema = new Schema({
  content: String,
  rating: {
    type: Number, 
    min: 1, 
    max: 5, 
    default: 5
  }
}, {
  timestamps: true
});

const destinationSchema = new Schema({
  arrival: {
    type: Date,
  },
  
  airport2: {
    type: String,    
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN',
    required: true,
  },
})      

const flightSchema = new Schema({
  airlines: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
    required: true,
  },

  airport: {
    type: String,    
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN',
    required: true,
  },
  
  flightNum: {
    type: Number,
    min: 10,
    max: 99999
  },

  departs: {
    type: Date,
  }, 

  destination: [destinationSchema],

  reviews: [reviewSchema],
  
  cast: [{
    type: Schema.Types.ObjectId,
    ref: 'Flyer'
  }], 
}, {
  timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);