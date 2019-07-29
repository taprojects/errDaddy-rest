require('dotenv').config();
const request = require('supertest');
const app = require('../../lib/app');
const mongoose = require('mongoose');
const connect = require('../../lib/utils/connect');
const { seedData } = require('../utils/seedData');


beforeAll(() => connect());

beforeEach(() => mongoose.connection.dropDatabase());
beforeEach(() => seedData());

afterAll(() => mongoose.connection.close());

describe('error route tests', () => {

  it('create a new error', () => {
    return request(app)
      .post('/api/v1/error')
      .send({
        title: 'title',
        error: '404',
        description: 'description',
        solution: 'solution',
        tags: ['tag1', 'tag2', 'tag3']
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          title: 'title',
          error: '404',
          description: 'description',
          solution: 'solution',
          tags: ['tag1', 'tag2', 'tag3']
        });
      });
  });

  it('gets errors based on hashtag', () => {
    seedData();
    return request(app)
      .get('/api/v1/error/react')
      .then(res => {
        expect(res.body).toEqual(expect.any(Array));
        expect(res.body[0].tags.includes('react')).toEqual(true);
        expect(res.body[0]).toEqual({
          _id: expect.any(String),
          title: expect.any(String),
          error: expect.any(String),
          description: expect.any(String),
          solution: expect.any(String),
          tags: expect.any(Array)
        });
      });
  });

  
});
