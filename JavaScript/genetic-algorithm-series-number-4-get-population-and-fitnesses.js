const mapPopulationFit = (population, fitness) => {
  var output = [];
  for (var i = 0; i < population.length; i++) {
    output[i] = {chromosome: population[i],
                 fitness:    fitness(population[i])
                }
  }
  return output;
};
