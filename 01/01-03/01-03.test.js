const { urlify } = require('./01-03');

it('passes tests by sorting strings and comparing', function() {
  expect(urlify('hello world')).toBe('hello%20world');
  expect(urlify('hello  world')).toBe('hello%20world');
  expect(urlify('this is  working just GREAT')).toBe('this%20is%20working%20just%20GREAT');
  expect(urlify('    ')).toBe('');
  expect(urlify('does      this work?')).toBe('does%20this%20work?');
  expect(urlify('no trailing spaces     ')).toBe('no%20trailing%20spaces');
  expect(urlify('    no leading spaces')).toBe('no%20leading%20spaces');
  expect(urlify('    no extra outer spaces     ')).toBe('no%20extra%20outer%20spaces');
});
