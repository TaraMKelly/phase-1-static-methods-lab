class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  static sanitize(str) {
    return str.replace(/[^\w\s\'\-]/g, "") //regex syntax!!
  }
  static titleize(str) {
    let arr = [];
    let exludeWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    arr = str.split(' ');
    arr[0] = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
    return arr.map(word => {
      return exludeWords.includes(word) ? [word] : word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ')
  }
}