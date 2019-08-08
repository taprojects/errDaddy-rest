require('dotenv').config();
const request = require('supertest');
const app = require('../../lib/app');
const mongoose = require('mongoose');
const connect = require('../../lib/utils/connect');
const { seedData } = require('../utils/seedData');
const Err = require('../../lib/models/Err');


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
        description: 'description',
        solution: 'solution',
        tags: ['tag1', 'tag2', 'tag3']
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          title: 'title',
          description: 'description',
          solution: 'solution',
          tags: ['tag1', 'tag2', 'tag3'],
          time: expect.any(String),
          good: 0,
          bad: 0
        });
      });
  });

  it('gets errors based on hashtag', () => {
    return request(app)
      .get('/api/v1/error/react')
      .then(res => {
        expect(res.body).toEqual(expect.any(Array));
        expect(res.body[0].tags.includes('react')).toEqual(true);
        expect(res.body[0]).toEqual({
          _id: expect.any(String),
          title: expect.any(String),
          description: expect.any(String),
          solution: expect.any(String),
          tags: expect.any(Array),
          time: expect.any(String),
          good: 0,
          bad: 0
        });
      });
  });

  it('gets error by _id', async() => {
    const err = await Err.findOne();
    return request(app)
      .get(`/api/v1/error/detail/${err._id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          title: expect.any(String),
          description: expect.any(String),
          solution: expect.any(String),
          tags: expect.any(Array),
          time: expect.any(String),
          good: 0,
          bad: 0
        });
      });
  });

  it('gets all errors', async() => {
    return request(app)
      .get('/api/v1/error/')
      .then(res => {
        expect(res.body.length).toEqual(50);
        expect(res.body[0]).toEqual({
          _id: expect.any(String),
          title: expect.any(String),
          description: expect.any(String),
          solution: expect.any(String),
          tags: expect.any(Array),
          time: expect.any(String),
          good: 0,
          bad: 0
        });
      });
  });

  it('gets 20 most recent error entries', async() => {
    return request(app)
      .get('/api/v1/error/recent')
      .then(res => {
        expect(res.body.length).toEqual(20);
        expect(res.body[0]).toEqual({
          _id: expect.any(String),
          title: expect.any(String),
          description: expect.any(String),
          solution: expect.any(String),
          tags: expect.any(Array),
          time: expect.any(String),
          good: 0,
          bad: 0
        });
      });
  });

  it('gets all distinct tags', async() => {
    return request(app)
      .get('/api/v1/error/allTags')
      .then(res => {
        expect(res.body).toEqual(['fetch', 'formDaddy', 'input', 'javascript', 'node', 'react']);
      });
  });

  it('increases error goods by 1', async() => {
    const err = await Err.findOne();
    return request(app)
      .patch(`/api/v1/error/good/${err._id}`)
      .then(res => {
        expect(res.body.good).toEqual(1);
      });
  });

  it('increases error bads by 1', async() => {
    const err = await Err.findOne();
    return request(app)
      .patch(`/api/v1/error/bad/${err._id}`)
      .then(res => {
        expect(res.body.bad).toEqual(1);
      });
  });
});
