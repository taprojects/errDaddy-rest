const mongoose = require('mongoose');
const Error = require('../../lib/models/Err');

describe('Error model test', () => {
  
  it('new error', () => {
    const error = new Error({
      title: 'title',
      description: 'description',
      solution: 'solution',
      tags: ['tag1', 'tag2', 'tag3']
    });
    expect(error.toJSON()).toEqual({
      _id: expect.any(mongoose.Types.ObjectId),
      title: 'title',
      description: 'description',
      solution: 'solution',
      tags: ['tag1', 'tag2', 'tag3'],
      time: expect.any(Object),
      good: 0,
      bad: 0
    });
  });

});
