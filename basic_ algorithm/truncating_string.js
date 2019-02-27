function truncateString(str, num) {
  // Clear out that junk in your trunk
  let sliceStr = str.slice(0,num);
  if (!(str.length <= num)){
    return sliceStr + "...";
  }
  return sliceStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);