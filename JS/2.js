var arrays = [[1, 2, 3], [4, 5], [6], [7,8,9,10]];

function sumArr(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(sumArr) ? sumArr(toFlatten) : toFlatten);
    }, []);
  }
console.log(sumArr(arrays))