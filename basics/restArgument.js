const sum = (function() {
    "use strict";
    return function sum(...numbertoadd) {
      return numbertoadd.reduce((accumulator,currentValue) => accumulator + currentValue ,0)
    };
  })();
console.log(sum(1, 2, 3)); // 6