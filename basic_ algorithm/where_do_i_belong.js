function getIndexToIns(arr, num) {
    arr.sort((a,b) => a-b);
    console.log(arr);
    for(let i=0; i<arr.length;i++){
      if(arr[i] >= num){
        arr.splice(i,0,num);
        console.log(arr , i);
        return i;
      }
    }
    arr.push(num);
    console.log(arr, arr.length - 1);
    return arr.length - 1;
}
console.log(getIndexToIns([2,20,10], 19));