function largestOfFour(arr) {
    let maxarr = [];
    for (let i = 0; i < arr.length; i++) {
      maxarr.push(arr[i].reduce((x, y) => Math.max(x, y), 0));
    }
    let max = maxarr[0], counter = 0;
    for (let i = 1; i < maxarr.length; i++) {
      if (maxarr[i] > max) {
        max = maxarr[i];
        counter = i;
      }
    }
    return arr[counter];
  }
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));