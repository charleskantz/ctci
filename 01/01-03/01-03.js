// assumptions: no multiple whitespaces, no trailing whitespace(s), case sensitive

// check for whitespace, replace with '%20' to "urlify"
function urlify(str) {
  str = str.trim().split('');
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      if (str[i - 1] === '%20' || str[i - 1] === '') {
        str[i] = '';
        i--;
        continue;
      }
      str[i] = '%20';
    }
  }
  return str.join('');
}

module.exports = { urlify };