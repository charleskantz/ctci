function isUnique(str) {
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      return false;
    }
  }
  return true;
}

/* TESTS */
console.log(isUnique('abcd'), true);
console.log(isUnique('abccd'), false);
console.log(isUnique('bhjjb'), false);
console.log(isUnique('mdjq'), true);