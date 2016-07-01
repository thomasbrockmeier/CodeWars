const crossover = (chromosome1, chromosome2, index) => {
  var mutation1 = mutation2 = "";
  for (var i = 0; i < chromosome1.length; i++) {
    mutation1 += (i < index) ? chromosome1[i] : chromosome2[i];
    mutation2 += (i < index) ? chromosome2[i] : chromosome1[i];
  }
  return [mutation1, mutation2];
};
