const { filterTag } = require('../../lib/utils/filterTag');
const errs = [
  { _id: '5d3e62f93499244861d2dc20', tags: ['javascript', 'fetch', 'react'], title: 'Wayne Ruiz', error: 'Maude Turner', description: '1351 Cawe Terrace', solution: 'Nassau Grouper' },
  { _id: '5d3e62f93499244861d2dc21', tags: ['input', 'input', 'fetch'], title: 'Jose Riley', error: 'Celia Edwards', description: '1229 Segici Heights', solution: 'Dog' },
  { _id: '5d3e62f93499244861d2dc22', tags: ['input', 'formDaddy', 'input'], title: 'Cory Foster', error: 'Anthony Moore', description: '474 Mifzab Road', solution: 'Barred Owl' }
];

it('filters for react', () => {
  const filtered = filterTag('react', errs);
  expect(filtered).toEqual([{
    _id: '5d3e62f93499244861d2dc20',
    tags: ['javascript', 'fetch', 'react'],
    title: 'Wayne Ruiz',
    error: 'Maude Turner',
    description: '1351 Cawe Terrace',
    solution: 'Nassau Grouper'
  }]);
});
