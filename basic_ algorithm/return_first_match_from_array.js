function findElement(arr, func) {
    let i;
    for(i=0;i<arr.length;i++){
      if(func(arr[i])){
        break;
      }
    }
    return arr[i];
  }
  
findElement([1, 2, 3, 4], num => num % 2 === 0);