const mongoose = require('mongoose');

const errorSchema = new mongoose.Schema ({
  title: {
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
  },
  good: {
    type: Number,
    default: 0
  },
  bad: {
    type: Number,
    default: 0
  }
}, 
{
  versionKey: false
}
);

errorSchema.statics.getAllTags = function() {
  return this.aggregate([
    {
      '$unwind': {
        'path': '$tags'
      }
    }, {
      '$group': {
        '_id': '$tags'
      }
    }
  ]);
};


const Err = mongoose.model('Err', errorSchema);

module.exports = Err;
