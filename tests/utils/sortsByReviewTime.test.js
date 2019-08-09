const { sortByReview } = require('../../lib/utils/sortByReview');

it('sorts by review', () => {
  
  const posts = [
    { title: 'sixth', time: '2019-08-09T17:46:34.583Z', good: 0, bad: 0 },
    { title: 'fifth', time: '2019-02-09T17:46:34.583Z', good: 0, bad: 0 },
    { title: 'fifth', time: '2019-08-09T17:46:34.583Z', good: 0, bad: 4 },
    { title: 'third', time: '2019-08-09T17:46:34.583Z', good: 3, bad: 0 },
    { title: 'first', time: '2019-08-09T17:46:34.583Z', good: 5, bad: 2 },
    { title: 'fourth', time: '2019-08-09T17:46:34.583Z', good: 10, bad: 30 },
    { title: 'second', time: '2019-08-09T17:46:34.583Z', good: 1, bad: 1  }
  ];
  const expected = [
    { title: 'third', time: '2019-08-09T17:46:34.583Z', good: 3, bad: 0 },
    { title: 'first', time: '2019-08-09T17:46:34.583Z', good: 5, bad: 2 },
    { title: 'second', time: '2019-08-09T17:46:34.583Z', good: 1, bad: 1 },
    { title: 'fifth', time: '2019-02-09T17:46:34.583Z', good: 0, bad: 0 },
    { title: 'sixth', time: '2019-08-09T17:46:34.583Z', good: 0, bad: 0 },
    { title: 'fourth', time: '2019-08-09T17:46:34.583Z', good: 10, bad: 30 },
    { title: 'fifth', time: '2019-08-09T17:46:34.583Z', good: 0, bad: 4 }
  ];

  const result = sortByReview(posts);
  expect(result).toEqual(expected);
});
