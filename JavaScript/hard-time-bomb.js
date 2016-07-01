var keysGlobal = Object.keys(global);

for (var i = 0; i < keysGlobal.length; i++) {
  if (keysGlobal[i].match(/^boom/)) {var wireKey = global[keysGlobal[i]]}
}
// Find the wire.
Bomb.CutTheWire(wireKey);
