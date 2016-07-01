function isMerge(s, part1, part2) {
  var c1 = c2 = 0;
  sArray = s.split("").reverse();
  part1 = part1.split("").reverse();
  part2 = part2.split("").reverse();
  sArray.forEach(function(element) {
    if (element == part1[c1]) {
      c1++;
    } else if (element == part2[c2]) {
      c2++;
    } else {c1 += 1000}
  });
  if (c1 === part1.length && c2 === part2.length) {return true;} else {return false;}
}
