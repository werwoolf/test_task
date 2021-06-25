let testData = [
  1,
  2,
  1990,
  85,
  24,
  "Vasya",
  "colya@example.com",
  "Rafshan",
  "ashan@example.com",
  true,
  false,
];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];

function array_unique(arr) {
  let clearArr = [];

  for (i = 0; i < arr.length; i++) {
    let j = arr[i];
    let p = clearArr.indexOf(j);
    if (p == -1) {
      clearArr.push(j);
    }
  }

  return clearArr;
}

let result = array_unique(testData.concat(testData2));
console.log(result);
