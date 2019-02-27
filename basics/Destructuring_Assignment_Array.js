//Snippet
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5


//Main Program

let a = 8, b = 6;
(() => {
  "use strict";
  [a,b]=[b,a];//flip
})();
console.log(a); // should be 6
console.log(b); // should be 8