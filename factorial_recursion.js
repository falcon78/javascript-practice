function factorialize(num) {
  if (num !== 1 && num !== 0){
    num = num * (factorialize(num-1))
    return num;  
  }
  else if (num!==0){
   return 1; 
  }
  return 0;
}

console.log(factorialize(5));
