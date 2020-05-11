const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flyerSchema = new Schema({
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

const ticketSchema = new Schema({
  seat: {
    type: String, 
    match: /[A-F][1-9]\d?/
  },
    
  price: {
    type: Number,
    min: 0,
  },

  // flight: {
  //   type: ObjectId,
  //   ref: 'Flight'
  // },
  
}, 
  {
  timestamps: true
});


module.exports = mongoose.model('Flyer', 
  flyerSchema, 
  // ticketSchema
);