const chance = require('chance').Chance();
const Err = require('../../lib/models/Err');

const tags = [
  'javascript',
  'input',
  'fetch',
  'formDaddy',
  'node',
  'react'
];

function seedData(errCount = 50) {
  const errs = [...Array(errCount)].map(() => ({
    title: chance.name(),
    error: chance.name(),
    description: chance.address(),
    solution: chance.animal(),
    tags: [chance.pickone(tags), chance.pickone(tags), chance.pickone(tags)]
  }));
  return Err.create(errs);
}

module.exports = {
  seedData
};
