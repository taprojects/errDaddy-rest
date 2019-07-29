const { Router } = require('express');
const Err = require('../models/Err');
const { filterTag } = require('../utils/filterTag');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { title, error, description, solution, tags } = req.body;
    Err
      .create({ title, error, description, solution, tags })
      .then(newErr => res.send(newErr))
      .catch(next);
  })
  .get('/:tag', (req, res, next) => {
    const tag = req.params.tag;
    Err
      .find()
      .lean()
      .then(tagList => res.send(filterTag(tag, tagList)))
      .catch(next);
  });

