const { Router } = require('express');
const Err = require('../models/Err');
const { filterTag } = require('../utils/filterTag');
const { sortByReview } = require('../utils/sortByReview');

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
  .get('/allTags', (req, res, next) => {
    Err
      .getAllTags()
      .then(things => res.send(things
        .map(item => item._id)
        .sort()))
      .catch(next);
  })
  .get('/:tag', (req, res, next) => {
    const tag = req.params.tag;
    if(tag === 'recent') {
      Err
        .find()
        .then(errs => errs.sort((a, b) => {return b.time - a.time;}))
        .then(sorted => { 
          res.send(sorted);
        })
        .catch(next);
    }
    Err
      .find()
      .lean()
      .then(tagList => filterTag(tag, tagList))
      .then(errs => res.send(sortByReview(errs)))
      .catch(next);
  })
  .get('/detail/:id', (req, res, next) => {
    const id = req.params.id;
    Err
      .findOne({ _id: id })
      .lean()
      .then(err => res.send(err))
      .catch(next);
  })
  .patch('/good/:id', (req, res, next) => {
    const id = req.params.id;
    Err
      .findByIdAndUpdate({ _id: id }, { $inc: { 'good': 1 } }, { new: true })
      .lean()
      .then(err => res.send(err))
      .catch(next);
  })
  .patch('/bad/:id', (req, res, next) => {
    const id = req.params.id;
    Err
      .findByIdAndUpdate({ _id: id }, { $inc: { 'bad': 1 } }, { new: true })
      .lean()
      .then(err => res.send(err))
      .catch(next);
  })
;

