function zeros (n) {

  var exp = 0; var i = 1; var nZeroes = 0;
  while (Math.pow(5, exp) < n) {exp++;}; exp--;
  for (i; i <= exp; i++) {nZeroes += n / Math.pow(5, i);}
  return Math.floor(nZeroes);
}
