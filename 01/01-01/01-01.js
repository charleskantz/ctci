function isUnique(str) {
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

/* TESTS */
console.log(isUnique('abcd'), true);
console.log(isUnique('abccd'), false);
console.log(isUnique('bhjjb'), false);
console.log(isUnique('mdjq'), true);
console.log(isUnique('akeioazm'), false);