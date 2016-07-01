function isValidWalk(walk) {
  //insert brilliant code here
  if(walk.length != 10) {
    return false;
  } else {
    n = w = s = e = 0;
    walk.filter(function(value) {
      if (value === 'n') {
        n++;
      } else if (value === 'w') {
        w++;
      } else if (value === 's') {
        s++;
      } else {
        e++;
      }
    });
    if (n === s && e === w) {
      return true;
    }
  }
}
