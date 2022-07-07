const arr = [1, 2, 3, 4, 5];
let flag = true;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > arr[i + 1]) {
    flag = false;
    break;
  }
}
console.log(flag);
