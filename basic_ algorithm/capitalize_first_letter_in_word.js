function titleCase(str) {
    str = str.toLowerCase();
    let copystr = str.split(" ");
    let newstr = [];
    newstr = copystr.map(string => {
      return string.replace(string.charAt(0),string.charAt(0).toUpperCase())});
    return newstr.join(" ");
  }

titleCase("I'm a little tea pot");