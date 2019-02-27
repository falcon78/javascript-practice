function confirmEnding(str, target) {
    str = str.slice (str.length - target.length);
    if(str === target){
      return true;
    }
    return false;
  }
  
confirmEnding("Bastian", "n");