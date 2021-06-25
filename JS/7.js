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

function array_find(array, search) {
  let x = array.indexOf(search);
  if (x != -1) {
    console.log(array[x]);
  } else {
    for (i = 0; i < array.length; i++) {
      var myRe = eval(search);
      var myArray = myRe.exec(array[i]);
      if (myArray != null) {
        console.log(myArray.input);
      }
    }
  }
}

let result = array_find(testData, "colya@example.com"); // ["Rafshan"]
