const mongoose = require('mongoose');

const travelPlaceSchema = new mongoose.Schema({
  image: { type: String, required: true }, // URL of the place image
  placeName: { type: String, required: true },
  location: { type: String, required: true }, // City, country, etc.
  description: { type: String, required: true },
  price: { type: Number, required: true }, // Price per person
  capacity: { type: Number, required: true }, // Maximum number of visitors allowed
});

module.exports = mongoose.model('TravelPlace', travelPlaceSchema);
