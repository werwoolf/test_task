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

function array_skip_until(arr, value) {
  let x = arr.indexOf(value, 0);
  let j = arr.splice(x, arr.length);
  console.log(j);
}

array_skip_until(testData, "Rafshan");
