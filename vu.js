const arr = [1, 2, 3, 5, 4];
let flag = true;
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      flag = false;
    }
  }
}
console.log(flag);
