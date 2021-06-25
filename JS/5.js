var arr = ["Solnce", "vishlo", "iz", "za", "tuchi"];
let n = arr.length - 1;

function recuseLog(array, n) {
  let x = " ";
   x = x + array[n];
  if (n >= 0) {
    recuseLog(arr, n - 1);
    console.log(x);
  } else {
      return x
  }
}

recuseLog(arr, n);
