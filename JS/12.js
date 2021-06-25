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
let obj = {};

function array_combine(keys, values) {
  for (i = 0; i < keys.length; i++) {
    if (typeof keys[i] == "string" || typeof keys[i] == "number") {
      let key = keys[i];
      let value = values[i];
      obj[key] = value;
    }
  }

  console.log(obj);
}

array_combine(testData, testData2);

