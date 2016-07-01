function array_diff(a, b) {

for (var i = 0; i < b.length; i++) {
  var shifts = 0;
  a.reduce(function(prev, curr, idx, arr) {if (curr === b[i]) {a.splice(idx, 1); a.splice(0, 0, 0); shifts++;}}, 0);
}
for (var i = 0; i < shifts; i++) {a.shift();}
return a;

}
