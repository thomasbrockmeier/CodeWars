function zeros (n) {
var z=0;
for (var i=5; i<n; i*=5){z += Math.floor(n/i);}
return z;
}
