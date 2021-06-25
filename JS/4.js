var arr = [1, 2, 3];

Array.prototype.append = function (n){
let j = this.reverse();
j[this.length]=n;
let x = j.reverse()
return j
}


console.log(arr.append(0));
