function titleCase(str) {
    let copystr = str.split(" ");
    let newstr = [];
    newstr = copystr.map(string => {
      return string.replace(string.charAt(0),string.charAt(0).toUpperCase())});
    return newstr;
  }
titleCase("I'm a little tea pot");