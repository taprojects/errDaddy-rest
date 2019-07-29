const mongoose = require('mongoose');

const errorSchema = new mongoose.Schema ({
  title: {
    type: String,
    required: true
  },
  error: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  solution: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    required: true
  },
  time : { 
    type : Date, 
    default: Date.now 
  }
}, 
{
  versionKey: false
}
);

const Err = mongoose.model('Err', errorSchema);

module.exports = Err;
