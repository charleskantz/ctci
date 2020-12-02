const {checkPermutationCount, checkPermutationSort} = require('./01-02');

it('passes tests by sorting strings and comparing', function() {
  expect(checkPermutationSort('abcd', 'abcd')).toBe(true);
  expect(checkPermutationSort('abcd', 'dcba')).toBe(true);
  expect(checkPermutationSort('abcd', 'dcbb')).toBe(false);
  expect(checkPermutationSort('abcd', 'DCBA')).toBe(false);
  expect(checkPermutationSort('abcde', 'abcd')).toBe(false);
  expect(checkPermutationSort('abcde  ', 'abcde ')).toBe(false);
  expect(checkPermutationSort('abcde  ', 'ecabd  ')).toBe(true);
});

it('passes tests by comparing character counts', function() {
  expect(checkPermutationCount('abcd', 'abcd')).toBe(true);
  expect(checkPermutationCount('abcd', 'dcba')).toBe(true);
  expect(checkPermutationCount('abcd', 'dcbb')).toBe(false);
  expect(checkPermutationCount('abcd', 'DCBA')).toBe(false);
  expect(checkPermutationCount('abcde', 'abcd')).toBe(false);
  expect(checkPermutationCount('abcde  ', 'abcde ')).toBe(false);
  expect(checkPermutationCount('abcde  ', 'ecabd  ')).toBe(true);
});