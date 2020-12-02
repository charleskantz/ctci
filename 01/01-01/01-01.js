// Solution using additional data structure (Set)
// time: O(n) where n = str.length
// space: O(n)
function isUniqueWithDS(str) {
  let seen = new Set();
  for (let i = 0; i < str.length; i++) {
    if (seen.has(str[i])) {
      return false;
    } else {
      seen.add(str[i]);
    }
  }
  return true;
}

// Solution without using additional data structure
// time: O(n^2) where n = str.length
// space: O(1)
function isUniqueNoDS(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) return false;
    }
  }
  return true;
}

module.exports = { isUniqueWithDS, isUniqueNoDS };