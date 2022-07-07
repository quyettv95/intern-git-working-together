function isIncreasing(arr) {
  var count = 0;
  const checkArr = [...arr];
  checkArr.sort();
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] != checkArr[i]) {
      count++;
    }
  }
  if (count != 2) {
    return false;
  }
  return true;
}

const arr = [1, 2, 4, 3, 6, 5];

console.log(isIncreasing(arr));
