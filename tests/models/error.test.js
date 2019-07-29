const mongoose = require('mongoose');
const Error = require('../../lib/models/Err');

describe('Error model test', () => {
  
  it('new error', () => {
    const error = new Error({
      title: 'title',
      error: '404',
      description: 'description',
      solution: 'solution',
      tags: ['tag1', 'tag2', 'tag3']
    });
    expect(error.toJSON()).toEqual({
      _id: expect.any(mongoose.Types.ObjectId),
      title: 'title',
      error: '404',
      description: 'description',
      solution: 'solution',
      tags: ['tag1', 'tag2', 'tag3']
    });
  });

});
