function position(x, y, n) {
  // TODO: return consecutive integer at requested position
  var a = [];
  var begin = Math.floor(y / x) - Math.ceil(x / 2 - 1);
  for (var i = 0; i < x; i++) {a.push(begin); begin++;} return a[n];
}
