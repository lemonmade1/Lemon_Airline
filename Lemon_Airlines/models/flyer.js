const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const performerSchema = new Schema({
  name: {
    type: String, 
    required: true, 
    unique: true
  },
    
  departs: Date,


  airport: {
    type: String,
    required: true,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN',
  },
  
}, 
  {
  timestamps: true
});

module.exports = mongoose.model('Flyer', performerSchema);