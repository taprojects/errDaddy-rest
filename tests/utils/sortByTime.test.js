const { sortByTime } = require('../../lib/utils/sortByTime');
const errList = [
  {
    tags: ['input', 'fetch', 'fetch'],
    _id: '5d3f2740f841375845366eb6',
    title: 'Erik Robbins',
    error: 'Isaiah Sherman',
    description: '1267 Dahru Plaza',
    solution: 'Dove',
    time: '2019-10-29T17:12:55.000Z'
  },
  {
    tags: ['javascript', 'javascript', 'fetch'],
    _id: '5d3f2740f841375845366eb3',
    title: 'Harold Payne',
    error: 'Glenn Chapman',
    description: '59 Evoif Parkway',
    solution: 'Threespot Damselfish',
    time: '2019-07-29T17:12:55.000Z'
  },
  {
    tags: ['react', 'fetch', 'input'],
    _id: '5d3f2740f841375845366eb4',
    title: 'Jeffrey Scott',
    error: 'Tony Alexander',
    description: '372 Cuped Lane',
    solution: 'Tamandua',
    time: '2019-09-29T17:12:55.000Z'
  }
];
const errSorted = [
  {
    tags: ['javascript', 'javascript', 'fetch'],
    _id: '5d3f2740f841375845366eb3',
    title: 'Harold Payne',
    error: 'Glenn Chapman',
    description: '59 Evoif Parkway',
    solution: 'Threespot Damselfish',
    time: '2019-07-29T17:12:55.000Z'
  },
  {
    tags: ['react', 'fetch', 'input'],
    _id: '5d3f2740f841375845366eb4',
    title: 'Jeffrey Scott',
    error: 'Tony Alexander',
    description: '372 Cuped Lane',
    solution: 'Tamandua',
    time: '2019-09-29T17:12:55.000Z'
  },
  {
    tags: ['input', 'fetch', 'fetch'],
    _id: '5d3f2740f841375845366eb6',
    title: 'Erik Robbins',
    error: 'Isaiah Sherman',
    description: '1267 Dahru Plaza',
    solution: 'Dove',
    time: '2019-10-29T17:12:55.000Z'
  }
];

it('adds time key value to each err obj', () => {
  expect(sortByTime(errList)).toEqual(errSorted);
});
