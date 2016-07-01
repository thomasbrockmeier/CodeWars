const mutate = (chromosome, p) => {
  var mutation = "";
   for (var i = 0; i < chromosome.length; i++) {
     mutation += Math.random() < p ? chromosome[i] ^ 1 : chromosome[i];
   }
   return mutation;
};
