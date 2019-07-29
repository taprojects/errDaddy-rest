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
  .get('/', (req, res, next) => {
    Err
      .find()
      .lean()
      .then(allErrs => res.send(allErrs))
      .catch(next);
  })
  .get('/:tag', (req, res, next) => {
    const tag = req.params.tag;
    if(tag === 'recent') {
      Err
        .find()
        .then(errs => 
          errs
            .sort((a, b) => { return a.time - b.time; })
            .slice(0, 20))
        .then(sorted => {
          res.send(sorted);
        })
        .catch(next);
    }
    Err
      .find()
      .lean()
      .then(tagList => {
        res.send(filterTag(tag, tagList));
      })
      .catch(next);
  })
  .get('/detail/:id', (req, res, next) => {
    const id = req.params.id;
    Err
      .findOne({ _id: id })
      .lean()
      .then(err => res.send(err))
      .catch(next);
  });

