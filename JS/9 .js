let testData4 = [
  { name: "Vasya", email: "vasya@example.com", age: 20 },
  { name: "Dima", email: "dima@example.com", age: 34 },
  { name: "Colya", email: "colya@example.com", age: 46 },
  { name: "Misha", email: "misha@example.com", age: 16 },
  { name: "Ashan", email: "ashan@example.com", age: 99 },
  { name: "Rafshan", email: "rafshan@example.com", age: 11 },
  1,
  '2.2',
  1990,
  85,
  24,
  "Vasya",
  "colya@example.com",
  "Rafshan",
  "ashan@example.com",
  true,
  false,
  [
    [
      [
        [
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
          [{ name: "Rafshan", email: "rafshan@example.com", age: 11 }],
        ],
      ],
    ],
  ],
];

let clear = [];

function array_normalize(arr, shema, shema1) {
  if (shema == "string" && !shema1) {
    arr.forEach((element) => {
      if (typeof element == "string") clear.push(element);
    });
  }
  if (shema == "string" && shema1) {
    arr.forEach((element) => {
      if (typeof element == "string" || typeof element == "number"  ) clear.push(element);
    });
  }

  if (shema == "number" && !shema1) {
    arr.forEach((element) => {
      if (typeof element == "number") clear.push(element);
    });
  }
  if (shema == "number" && shema1) {
    arr.forEach((element) => {
      if (typeof element == "number"|| typeof (element*1) == "number"&& element>-Infinity ) clear.push(element);
    });
  }


  if (shema == "int" && !shema1) {
    arr.forEach((element) => {
      if (typeof element == "number" && element % 1==0) clear.push(element);
    });
  }
  if (shema == "int" && shema1) {
    arr.forEach((element) => {
      if ((typeof element == "number" && element % 1==0)||(typeof (element*1) == "number" && element>-Infinity && element % 1==0)) clear.push(element);
    });
  }


  if (shema == "float" && !shema1 ) {
    arr.forEach((element) => {
      if ((typeof element == "number" && element % 1!=0)) clear.push(element);
    });
  }
  if (shema == "float" && shema1 ) {
    arr.forEach((element) => {
      if ((typeof element == "number" && element % 1!=0)||(typeof (element*1) == "number" && element>-Infinity && element % 1!=0)) clear.push(element);
    });
  }


  if (shema == "bool" ) {
    arr.forEach((element) => {
      if (typeof element == "boolean" ) clear.push(element);
    });
  }
 
  if (shema == "function") {
    arr.forEach((element) => {
      if (typeof element == "function" ) clear.push(element);
    });
  }
  if (shema == "array") {
    arr.forEach((element) => {
      if (Array.isArray(element) ) clear.push(element);
    });
  }
  if (shema == Object) {
    arr.forEach((element) => {
      if (typeof element == "object" && element.name) clear.push(element.name);
    });
  }

  console.log(clear);
}

array_normalize(testData4, "float", true );



