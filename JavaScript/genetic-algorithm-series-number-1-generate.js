const generate = length => {
  var a = "";
  for (var i = 0; i < length; i++) {a = a + Math.floor(Math.random() * 2).toString()}
  return a;
};
