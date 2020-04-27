const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

const flightSchema = new Schema({

  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
    required: true,
  },

  airport: {
    type: String,
    required: true,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN',
  },
  
  flightNum: {
    type: Number,
    min: 10,
    max: 9999
  },

  departs: Date,
  
  // mpaaRating: String,
  
  cast: [String]
});

module.exports = mongoose.model('Flight', flightSchema);