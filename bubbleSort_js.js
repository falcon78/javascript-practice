var arr = [0,1,5,3,6,3,6,7,4,34,44,22,56,2,552,55,11111,34,556];

for(let i=0;i<arr.length-1;i++){
  for (let j=0; j< arr.length-i-1;j++){
    if (arr[j] > arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
    }
  }
}

console.log(arr);