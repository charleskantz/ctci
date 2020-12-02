// Assumptions: case-sensitive, whitespace counts

// Solution that sorts letter of each string and compares
// time: O(n) where n = str.length
// space: O(1)
function checkPermutationSort(str1, str2) {
  // fast fail if strings are not equal in length
  if (str1.length !== str2.length) return false;

  // sort each string
  str1 = str1.split('').sort();
  str2 = str2.split('').sort();

  return str1.join('') === str2.join('');
}

// Solution that uses a frequency counter to count chars and compare results
// time: O(n) where n = str.length
// space: O(n) for the count objects, where n is str.length
function checkPermutationCount(str1, str2) {
  // fast fail if strings are not equal in length
  if (str1.length !== str2.length) return false;

  // create count for each str
  let str1Count = freqCount(str1);
  let str2Count = freqCount(str2);

  // compare counts
  for (let char in str1Count) {
    if (str1Count[char] !== str2Count[char]) return false;
  }
  return true;
}

// helper function to count frequency of characters
function freqCount(str) {
  let count = {};
  for (let char of str) {
    if (!count[char]) count[char] = 1;
    else count[char]++;
  }
  return count;
}

module.exports = { checkPermutationSort, checkPermutationCount };