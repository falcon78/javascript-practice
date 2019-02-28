function mutation (arr){
    for (let i=0; i<arr[1].length;i++){
        let searchReg = new RegExp(arr[1][i],'gi');
        if (!(searchReg.test(arr[0]))){
            return false;
        }
    }
    return true;

}

console.log(mutation(["hello", "Hello"]));
