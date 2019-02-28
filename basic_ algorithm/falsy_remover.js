function bouncer(arr) {
    arr = arr.filter(Boolean);
    console.log(arr);
    return arr;
  }
bouncer([7, "ate", "", false, 9]);