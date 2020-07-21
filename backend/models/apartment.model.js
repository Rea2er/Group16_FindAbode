const mongoose = require('mongoose');

const apartmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: false,
  },
  description: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  postal_code: {
    type: String,
    required: true
  },
  price:{
    type: String,
    required: true
  },
  number_of_guests:{
    type: String,
    required: true
  },
  number_of_bedroom:{
    type: String,
    required: true
  },
  number_of_beds:{
    type: String,
    required: true
  },
  number_of_baths:{
    type: String,
    required: true
  },
});

const Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;