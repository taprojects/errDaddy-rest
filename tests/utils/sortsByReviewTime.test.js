const { sortByReview } = require('../../lib/utils/sortByReview');

it('sorts by review', () => {
  
  const posts = [
    { title: 'sixth', good: 0, bad: 0 },
    { title: 'fifth', good: 0, bad: 0 },
    { title: 'fifth', good: 0, bad: 4 },
    { title: 'third', good: 3, bad: 0 },
    { title: 'first', good: 5, bad: 2 },
    { title: 'fourth', good: 10, bad: 30 },
    { title: 'second', good: 1, bad: 1  }
  ];
  const expected = [
    { title: 'third', good: 3, bad: 0 },
    { title: 'first', good: 5, bad: 2 },
    { title: 'second', good: 1, bad: 1 },
    { title: 'sixth', good: 0, bad: 0 },
    { title: 'fifth', good: 0, bad: 0 },
    { title: 'fourth', good: 10, bad: 30 },
    { title: 'fifth', good: 0, bad: 4 }
  ];

  const result = sortByReview(posts);
  expect(result).toEqual(expected);
});
