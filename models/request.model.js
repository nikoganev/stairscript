const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const request_schema = new Schema({
  campaignName: {
    type: String,
    required: true
  },
  operationalUnit: {
    type: String,
    required: true
  },
  therapeuticArea: {
    type: String,
    required: true,
    unique: true
  },
  product: {
    type: String,
    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  }

});

const Request = mongoose.model('request', request_schema);

module.exports = Request;
