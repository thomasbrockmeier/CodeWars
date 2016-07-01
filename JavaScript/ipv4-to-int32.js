function ipToInt32(ip){
  var integers = [];
  var binaries = [];
  var i = 0;

  integers = ip.split(".");
  for(i; i < integers.length; i++){
    var j = 7;
    var binaryTemp = "";
    var integerTemp = integers[i];

    for (j; j >= 0; j--) {
      currentPower = Math.pow(2, j);

      if (integerTemp >= currentPower){
        binaryTemp += "1";
        integerTemp -= currentPower;
      } else {
        binaryTemp += "0";
      }
    }
    binaries.push(binaryTemp);
  }

  bit32 = binaries[0].concat(binaries[1], binaries[2], binaries[3]);

  outputInt = 0;
  var x = bit32.length - 1;

  var c = 0;
  for (x; x >= 0; x--){
    if (bit32[c] === "1"){
      outputInt += Math.pow(2, x);
    } else {
    }
    c++;
  }
  return outputInt;
}
