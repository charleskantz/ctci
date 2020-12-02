const {isUniqueWithDS, isUniqueNoDS} = require('./01-01');

it('passes tests with added data structure', function() {
  expect(isUniqueWithDS('abcd')).toBe(true);
  expect(isUniqueWithDS('aAbB')).toBe(true);
  expect(isUniqueWithDS('abcCd')).toBe(true);
  expect(isUniqueWithDS('bbojse')).toBe(false);
  expect(isUniqueWithDS('xbdfthX')).toBe(true);
  expect(isUniqueWithDS('xbdfthXx')).toBe(false);
  expect(isUniqueWithDS('xbdfthx')).toBe(false);
});

it('passes tests without added data structure', function() {
  expect(isUniqueNoDS('abcd')).toBe(true);
  expect(isUniqueNoDS('aAbB')).toBe(true);
  expect(isUniqueNoDS('abcCd')).toBe(true);
  expect(isUniqueNoDS('bbojse')).toBe(false);
  expect(isUniqueNoDS('xbdfthX')).toBe(true);
  expect(isUniqueNoDS('xbdfthXx')).toBe(false);
  expect(isUniqueNoDS('xbdfthx')).toBe(false);
});