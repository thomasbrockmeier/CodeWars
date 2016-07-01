const mutate = (chromosome, p) => {
  for (var i = 0; i <chromosome.length; i++) {
    if (Math.floor(Math.random() + p)) {
      if (chromosome[i] === '1') {var mutate = '0'} else {var mutate = '1'}
      chromosome = chromosome.substr(0, i) + mutate + chromosome.substr(i + 1);
    }
  }
  return chromosome;
};
