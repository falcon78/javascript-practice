function repeatStringNumTimes(str, num) {
  if (num<0){
    return str="";
  }
  let repeatstr="";
  for (let i =0;i<num;i++){
    repeatstr = repeatstr + str;
  }
  console.log(repeatstr);
  return repeatstr;
}

repeatStringNumTimes("abc", 3);
